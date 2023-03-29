import mongoConnection from "../db.js";
import { encryptData, decryptData } from "../services/encryption.js";
import emailOtp from "../services/emailService.js";
import { User } from "../models/user.js";
import resendOtp from "../helpers/resendOtp.js";
import { getAccessToken } from "../helpers/jwtToken.js";
import jwt from "jsonwebtoken";
const userController = {};

userController.signup = async (req, res) => {
  try {
    const { fName, sName, email, password } = req.body;

    await mongoConnection();

    const response = await User.findOne({ email });
    if (response && response.emailVerified === true) {
      return res.status(409).json({ message: "User already exists! " });
    }
    if (!response) {
      const hashedPass = await encryptData(password);
      const otp = (Math.floor(Math.random() * 600000) + 100000).toString();
      const hashedOtp = await encryptData(otp);

      const user = new User({
        firstName: fName,
        lastName: sName,
        email: email,
        password: hashedPass,
        otp: hashedOtp,
        otpExpiry: Date.now() + 600000,
      });
      await user.save();

      emailOtp(otp, email);

      return res.status(200).json({ message: "OK" });
    }
    resendOtp(email);
    return res.status(200).json({ message: "OK" });
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error! " });
  }
};

userController.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    await mongoConnection();
    const response = await User.findOne({ email });
    if (!response) {
      return res.status(404).json({ message: "User doesn't exist! " });
    }
    if (!response.emailVerified) {
      return res.status(401).json({
        message: "Email not verified, complete the signup process again. ",
      });
    }

    const hashedPass = response.password;
    const verifyPass = await decryptData(password, hashedPass);

    if (!verifyPass) {
      return res.status(401).json({ message: "Invalid Password" });
    }
    const accessToken = getAccessToken({
      userId: response._id,
      firstName: response.firstName,
      lastName: response.lastName,
      email: response.email,
    });
    res.status(200).json(accessToken);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error!" });
  }
};

userController.verifyOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;
    await mongoConnection();
    const response = await User.findOne({ email });
    const hashedOtp = response.otp;
    const otpExpiry = response.otpExpiry;

    if (Date.now() > otpExpiry) {
      return res.status(401).json({
        message: "The otp has expired, please resend another one. ",
      });
    }

    const otpVerify = await decryptData(otp, hashedOtp);
    if (!otpVerify) {
      return res.status(409).json({ message: "OTP mismatch!" });
    }

    await User.updateOne(
      { email },
      { $set: { emailVerified: true }, $unset: { otp: "", otpExpiry: "" } }
    );

    const accessToken = getAccessToken({
      userId: response._id,
      firstName: response.firstName,
      lastName: response.lastName,
      email: response.email,
    });
    return res.status(200).json(accessToken);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error!" });
  }
};

userController.authenticated = async (req, res) => {
  try {
    const { accessToken } = req.cookies;
    const decoded = await jwt.verify(
      accessToken,
      process.env.REACT_APP_JWT_ACCESS_SECRET
    );
    const { userId, firstName } = decoded;
    res.status(200).json({ message: "OK", firstName, userId });
  } catch (err) {
    console.log("JWT verification failed ");
    res.status(403).json({ message: "Unauthorized" });
  }
};

userController.logout = (req, res) => {
  return res.send(200);
};

export default userController;
