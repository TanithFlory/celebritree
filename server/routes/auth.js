import express from "express";
import userController from "../controllers/auth.js";
import { resendOtp } from "../helpers/otp.js";
import rateLimiter from "../middleware/rateLimiter.js";
import bodyParser from "body-parser";

const router = express.Router();

router.use(bodyParser.urlencoded({ extended: true }));

router.get("/authenticated", (req, res) => {
  userController.authenticated(req, res);
});

router.post("/signup", rateLimiter(15, 60), (req, res) => {
  userController.signup(req, res);
});

router.post("/login", (req, res) => {
  userController.login(req, res);
});

router.post("/verify-otp", (req, res) => {
  userController.verifyOtp(req, res);
});

router.post("/resend-otp", rateLimiter(3, 15), (req, res) => {
  resendOtp(req.body.email).then(() =>
    res.json({ message: "OTP sent! check your mailbox! " })
  );
});

export default router;
