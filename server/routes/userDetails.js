import express from "express";
import userInfo from "../controllers/userInfo.js";
import bodyParser from "body-parser";
import verifyJwt from "../middleware/jwtMiddleware.js";

const router = express.Router();
router.use(bodyParser.urlencoded({ extended: true }));

router.post("/change-name", verifyJwt, (req, res) => {
  userInfo.personalDetails(req, res);
});

router.post("/change-email", (req, res) => {
  userInfo.email(req, res);
});

router.post("/verify-otp", verifyJwt, (req, res) => {
  userInfo.verifyOtp(req, res);
});

export default router;
