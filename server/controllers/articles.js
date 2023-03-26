import mongoConnection from "../db.js";
import { article } from "../models/articles.js";
export const getArticles = async (req, res) => {
  const list = req.query.list;
  const mongoose = await mongoConnection();
  const response = await mongoose.connection.db
    .collection("articles")
    .findOne({ title: list });

  return res.status(200).json(response);
};

export const articlePreview = async (req, res) => {
  const title = req.query.title
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  await mongoConnection();
  const response = await article.findOne(
    { tag: "latest" },
    { items: { $elemMatch: { title: "The Story Behind Celebritree" } } }
  );
  res.status(200).json(response.items[0]);
};
