import mongoConnection from "../db.js";
import { encryptData, decryptData } from "../services/encryption.js";
import jwt from "jsonwebtoken";
import emailOtp from "../services/emailService.js";
import { User } from "../models/user.js";
import resendOtp from "../helpers/resendOtp.js";

const userController = {};

userController.signup = async (req, res) => {
  try {
    const { fName, sName, email, password } = req.body;

    await mongoConnection();

    const response = await User.findOne({ email });
    if (response && response.emailVerified === true) {
      return res.status(409).json({ response: "User already exists! " });
    }
    if (!response) {
      //completely a new user
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

      return res.status(200).json({
        message: "Success, Proceed to verify OTP!",
      });
    }
    //new user but cancelled signup after otp was sent.
    resendOtp(email);

    res.status(200).json({
      message: "Success, Proceed to verify OTP!",
    });
  } catch (err) {
    console.log(err);
  }
};

userController.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    await mongoConnection();
    const response = await User.findOne({ email });
    if (!response) {
      return res.json({ message: "User doesn't exist! " });
    }
    if (!response.emailVerified) {
      return res.json({ message: "Email not verified, complete the signup process again. " });
    }
    const hashedPass = response.password;
    const verifyPass = await decryptData(password, hashedPass);
   
    if (!verifyPass) {
      return res.json({ message: "Invalid Password" });
    }
    const token = jwt.sign(
      { userId: response._id },
      process.env.REACT_APP_JWT_SECRET,
      {
        expiresIn: "365d",
      }
    );
    return res.json({ token });
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
    res.status(200).json({ message: "VERIFIED! " });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error!" });
  }
};

export default userController;
