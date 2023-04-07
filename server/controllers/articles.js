import mongoConnection from "../db.js";
import { article } from "../models/articles.js";
import redis from "../helpers/redisClient.js";

export const getArticles = async (req, res) => {
  try {
    const list = req.query.list;

    const cachedContent = JSON.parse(await redis.get(list));
    if (cachedContent) {
      return res.status(200).json(cachedContent);
    }

    await mongoConnection();
    const response = JSON.stringify(
      await article.findOne(
        { tag: list },
        {
          tag: 0,
          _id: 0,
          "items._id": 0,
          "items.content": 0,
          "items.highlights": 0,
        }
      )
    );
    if (response) {
      await redis.set(list, response, "EX", 3600);
      return res.status(200).json(JSON.parse(response));
    }
  } catch (err) {
    console.log(err);
  }
};

export const articlePreview = async (req, res) => {
  try {
    const title = req.query.title
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    const tag = req.query.tag;

    const cachedContent = JSON.parse(await redis.get(title));
    if (cachedContent) {
      return res.status(200).json(cachedContent.items);
    }

    await mongoConnection();
    const response = await article.aggregate([
      { $match: { tag } },
      { $unwind: "$items" },
      { $match: { "items.title": title } },
      {
        $project: {
          _id: 0,
          "items.content": 1,
          "items.highlights": 1,
        },
      },
    ]);
    if (response) {
      await redis.set(title, JSON.stringify(response[0]), "EX", 3600);
      return res.status(200).json(response[0].items);
    }
  } catch (err) {
    console.log(err);
  }
};
