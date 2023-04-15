import express from "express";
import userController from "../controllers/auth.js";
import { resendOtp } from "../helpers/otp.js";
import rateLimiter from "../middleware/rateLimiter.js";
import bodyParser from "body-parser";
import mongoConnection from "../db.js";
import { User } from "../models/user.js";

const router = express.Router();

router.use(bodyParser.urlencoded({ extended: true }));

router.post("/signup", rateLimiter(15, 60), (req, res) => {
  userController.signup(req, res);
});

router.post("/login", (req, res) => {
  userController.login(req, res);
});

router.post("/verify-otp", (req, res) => {
  userController.verifyOtp(req, res);
});

router.post("/resend-otp", rateLimiter(5, 15), async (req, res) => {
  const email = req.body.email;
  await mongoConnection();
  const response = await User.findOne({ email });

  if (!response) {
    return res.status(404).json("User not found");
  }
  await resendOtp(email);
  res.status(200).json("OTP sent, check inbox and spam folder.");
});

export default router;
