import { Schema, model } from "mongoose";

const ArticleSchema = Schema(
  {
    title: String,
    body: String,
    cover: String,
    status: {
      type: String,
      enum: ["draft", "published"],
      default: "draft",
    },
    author: {
      type: Schema.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true, id: true }
);

const Article = model("Article", ArticleSchema);

export default Article;
