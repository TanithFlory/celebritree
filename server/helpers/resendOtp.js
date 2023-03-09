import { User } from "../models/user.js";
import { encryptData } from "../services/encryption.js";
import emailOtp from "../services/emailService.js";
import mongoConnection from "../db.js";

const resendOtp = async (email) => {
  const otp = (Math.floor(Math.random() * 600000) + 100000).toString();
  emailOtp(otp, email);
  const hashedOtp = await encryptData(otp);
  await mongoConnection();
  await User.updateOne(
    { email },
    {
      $set: {
        otpExpiry: Date.now() + 600000,
        otp: hashedOtp,
      },
    }
  );
};

export default resendOtp;
