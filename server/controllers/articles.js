import mongoConnection from "../db.js";
import { article } from "../models/articles.js";
import { createClient } from "redis";

const redisClient = createClient({
  url: process.env.REDIS_URI,
});

export const getArticles = async (req, res) => {
  try {
    const list = req.query.list;
    await redisClient.connect();

    const cachedContent = JSON.parse(await redisClient.get(list));
    if (cachedContent) {
      await redisClient.disconnect();
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

    await redisClient.set(list, response, "EX", 3600);
    await redisClient.disconnect();
    return res.status(200).json(response);
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

    await redisClient.connect();
    const cachedContent = JSON.parse(await redisClient.get(title));
    if (cachedContent) {
      await redisClient.disconnect();
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

    await redisClient.set(title, JSON.stringify(response[0]), "EX", 3600);
    await redisClient.disconnect();
    return res.status(200).json(response[0].items);
  } catch (err) {
    console.log(err);
  }
};
