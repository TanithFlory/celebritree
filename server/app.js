import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import rateLimiter from "./middleware/rateLimiter.js";
import * as dotenv from "dotenv";

import userController from "./controllers/authController.js";

import resendOtp from "./helpers/resendOtp.js";

const port = 3001;
const app = express();

dotenv.config({ path: "../.env" });
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/api/signup", rateLimiter(15,60), (req, res) => {
  userController.signup(req, res);
});

app.post("/api/login", (req, res) => {
  userController.login(req, res);
});

app.post("/api/verify-otp", (req, res) => {
  userController.verifyOtp(req, res);
});

app.post("/api/resend-otp", rateLimiter(5,15), (req, res) => {
  resendOtp(req.body.email).then(() =>
    res.json({ message: "OTP sent! check your mailbox! " })
  );
});

app.listen(port, () => {
  console.log(`listening to ${port}`);
});
