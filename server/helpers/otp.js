import { User } from "../models/user.js";
import { encryptData } from "../services/encryption.js";
import emailOtp from "../services/emailService.js";
import mongoConnection from "../db.js";

export const resendOtp = async (email, newEmail) => {
  const otp = (Math.floor(Math.random() * 600000) + 100000).toString();
  const hashedOtp = await encryptData(otp);
  await mongoConnection();
  if (newEmail) {
    emailOtp(otp, newEmail);
    await User.updateOne(
      { email },
      {
        $set: {
          otpExpiry: Date.now() + 600000,
          otp: hashedOtp,
          newEmail,
        },
      }
    );
  } else {
    emailOtp(otp, email);
    await User.updateOne(
      { email },
      {
        $set: {
          otpExpiry: Date.now() + 600000,
          otp: hashedOtp,
        },
      }
    );
  }
};
