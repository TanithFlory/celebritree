import express from "express";
import { getArticles, articlePreview } from "../controllers/articles.js";
const router = express.Router();

router.get("/get-articles", (req, res) => {
  getArticles(req, res);
});

router.get("/article-preview", (req, res) => {
  articlePreview(req, res);
});

export default router;
