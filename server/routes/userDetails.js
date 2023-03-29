import express from "express";
import userInfo from "../controllers/userInfo.js";
import bodyParser from "body-parser";

const router = express.Router();
router.use(bodyParser.urlencoded({ extended: true }));

router.post("/change-name", (req, res) => {
  userInfo.personalDetails(req, res);
});

export default router;
