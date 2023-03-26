import mongoose from "mongoose";

const articleSchema = new mongoose.Schema({
  tag: String,
  items: [
    {
      id: Number,
      title: String,
      date: String,
      description: String,
      content: String,
    },
  ],
});

export const article = mongoose.model("article", articleSchema);
