import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
  fName: String,
  sName: String,
  email: String,
  password: String,
  verified: Boolean,
});

export const User = mongoose.model("User", usersSchema);

const userOtpVerifySchema = new mongoose.Schema({
  email: String,
  otp: String,
  expiry: Number,
});

export const UserOtpVerify = mongoose.model(
  "userOtpVerify",
  userOtpVerifySchema
);
