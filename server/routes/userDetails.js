import express from "express";
import userInfo from "../controllers/userInfo.js";
import bodyParser from "body-parser";
import verifyJwt from "../middleware/jwtMiddleware.js";
import rateLimiter from "../middleware/rateLimiter.js";

const router = express.Router();
router.use(bodyParser.urlencoded({ extended: true }));

router.post("/change-name", [verifyJwt, rateLimiter(1, 1440)], (req, res) => {
  userInfo.personalDetails(req, res);
});

router.post("/change-email", (req, res) => {
  userInfo.email(req, res);
});

router.post("/verify-otp", [verifyJwt, rateLimiter(1, 1440)], (req, res) => {
  userInfo.verifyOtp(req, res);
});

router.post("/change-password", [rateLimiter(15, 1440)], (req, res) => {
  userInfo.changePassword(req, res);
});

export default router;
