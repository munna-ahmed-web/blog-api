import Article from "../../model/Article.js";

const create = async ({
  title,
  body = "",
  cover = "",
  status = "draft",
  author,
}) => {
  if (!title || !author) {
    const error = new Error("Invalid parameters");
    error.status = 400;
    throw error;
  }

  const article = new Article({ title, body, cover, status, author });
  await article.save();
  return {
    ...article._doc,
    id: article.id,
  };
};

export default create;
