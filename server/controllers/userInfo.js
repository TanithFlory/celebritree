import mongoConnection from "../db.js";
import { getAccessToken } from "../helpers/jwtToken.js";
import { resendOtp } from "../helpers/otp.js";
import { User } from "../models/user.js";
import { decryptData, encryptData } from "../services/encryption.js";

const userInfo = {};

userInfo.personalDetails = async (req, res) => {
  try {
    await mongoConnection();
    const { email, userId } = req.data;
    const { firstName, lastName } = req.body;
    const response = await User.updateOne(
      { _id: userId },
      { firstName, lastName }
    );
    if (response.acknowledged) {
      const accessToken = getAccessToken({
        userId,
        firstName,
        lastName,
        email,
      });
      res.status(200).json(accessToken);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json("Internal Server Error");
  }
};

userInfo.email = async (req, res) => {
  try {
    await mongoConnection();
    const { password, email, oldEmail } = req.body;
    const existingEmail = await User.findOne({
      email: email,
    });
    if (existingEmail) {
      return res.status(409).json("Conflict. The email is already taken.");
    }

    const response = await User.findOne(
      { email: oldEmail },
      { password: 1, _id: 0 }
    );
    if (!response.password) {
      return res
        .status(400)
        .json(
          "It seems that you're logged in with Google. Please set the password first."
        );
    }

    const verifyPass = await decryptData(password, response.password);
    if (!verifyPass) {
      return res.status(401).json("Password is invalid.");
    }

    await resendOtp(oldEmail, email);
    res.status(200).json("Otp sent to the new email, please verify the otp. ");
  } catch (err) {
    res.status(500).json("Internal Server Error");
  }
};

userInfo.verifyOtp = async (req, res) => {
  try {
    const { userOtp, oldEmail } = req.body;

    await mongoConnection();

    const response = await User.findOne({ email: oldEmail });
    const { otp, newEmail, otpExpiry } = response;

    if (Date.now() > otpExpiry) {
      return res.status(400).json("Otp expired.");
    }
    const decryptedOtp = await decryptData(userOtp, otp);
    if (!decryptedOtp) {
      return res.status(401).json("Invalid otp.");
    }
    await User.updateOne(
      { email: oldEmail },
      {
        $set: { email: newEmail },
        $unset: { otp: "", expiry: "", newEmail: "" },
      }
    );
    const { firstName, lastName, userId } = req.data;
    const accessToken = getAccessToken({
      userId,
      firstName,
      lastName,
      email: newEmail,
    });
    res.status(200).json(accessToken);
  } catch (err) {
    console.log(err);
    res.status(500).json("Internal Server Error");
  }
};

userInfo.changePassword = async (req, res) => {
  try {
    const { userOtp, password, email } = req.body;
    await mongoConnection();

    const { otp, otpExpiry } = await User.findOne({ email });
    if (Date.now() > otpExpiry) {
      return res.status(400).json("Otp Expired!");
    }
    const decryptedOtp = await decryptData(userOtp, otp);
    if (!decryptedOtp) {
      return res.status(409).json("Invalid OTP");
    }
    const hashedPass = await encryptData(password);
    await User.updateOne(
      { email },
      {
        $set: { password: hashedPass },
        $unset: { otpExpiry: "", otp: "" },
      }
    );
    res.status(200).json("Success");
  } catch (err) {
    res.status(500).json("Internal Server Error");
  }
};

export default userInfo;
