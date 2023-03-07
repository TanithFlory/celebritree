import mongoConnection from "../db.js";
import { encryptData, decryptData } from "../services/encryption.js";
import jwt from "jsonwebtoken";
import emailOtp from "../services/emailService.js";
import { User, UserOtpVerify } from "../models/user.js";
import resendOtp from "../helpers/resendOtp.js";

const userController = {};

userController.signup = async (req, res) => {
  try {
    const { fName, sName, email, password } = req.body;

    await mongoConnection();

    const response = await User.findOne({ email });
    if (response && response.verified === true) {
      return res.status(409).json({ response: "User already exists! " });
    }
    if (!response) {
      //completely a new user
      (async () => {
        const hashedPass = await encryptData(password);

        const user = new User({
          fName: fName,
          sName: sName,
          email: email,
          password: hashedPass,
          verified: false,
        });
        user.save().then(async () => {
          const otp = (Math.floor(Math.random() * 600000) + 100000).toString();
          emailOtp(otp, email);
          
          const hashedOtp = await encryptData(otp);
          const userOtpVerify = new UserOtpVerify({
            email,
            expiry: Date.now() + 600000,
            otp: hashedOtp,
          });
          userOtpVerify.save();
        });
      })();
      return res.status(200).json({
        message: "Success!",
      });
    }
    //new user but cancelled signup after otp was sent.
    resendOtp(email).then(()=>{
      res.status(200).json({
        message: "Success!",
      });
    });
  } catch (err) {
    console.log(err);
  }
};

userController.verifyOtp = async (req, res) => {
  const { email, otp } = req.body;
  await mongoConnection();
  UserOtpVerify.findOne({ email }).then(async (response) => {
    const hashedOtp = response?.otp;
    const expiry = response?.expiry;
    if (Date.now() > expiry) {
      return res.status(401).json({
        message: "The otp has expired, please resend another one. ",
      });
    }
    const otpVerify = await decryptData(otp, hashedOtp).catch(() => {
      res.status(409).json({ message: "OTP mismatch" });
    });
    if (otpVerify) {
      (async () => {
        await User.updateOne({ email }, { $set: { verified: true } });
        await UserOtpVerify.deleteMany({ email });
        res.status(200).json({ message: "VERIFIED! " });
      })();
    }
  });
};

userController.login = async (req, res) => {
  const { email, password } = req.body;

  await mongoConnection();

  User.findOne({ email }).then(async (response) => {
    if (!response) {
      res.json({ message: "User doesn't exist! " });
    } else {
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
    }
  });
};

export default userController;
