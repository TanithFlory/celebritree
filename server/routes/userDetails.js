import express from "express";
import userInfo from "../controllers/userInfo.js";

const router = express.Router();

router.get("/get-details", userInfo.details);

export default router;