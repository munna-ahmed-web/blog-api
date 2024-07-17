import { Schema, model } from "mongoose";

const CommentSchema = Schema(
  {
    body: String,
    status: {
      type: String,
      enum: ["public", "private"],
      default: "public",
    },
    author: {
      type: Schema.ObjectId,
      ref: "User",
    },
    article: {
      type: Schema.ObjectId,
      ref: "Article",
    },
  },
  { timestamps: true, id: true }
);

const Comment = model("Comment", CommentSchema);

export default Comment;
