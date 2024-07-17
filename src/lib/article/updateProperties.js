import Article from "../../model/Article.js";

const updateProperties = async (id, { title, body, cover, status }) => {
  const article = await Article.findById(id);
  if (!article) {
    const error = new Error("Resource not found");
    error.status = 404;
    throw error;
  }

  article.title = title ?? article.title;
  article.body = body ?? article.body;
  article.cover = cover ?? article.cover;
  article.status = status ?? article.status;
  await article.save();
  return { ...article._doc, id: article.id };
};

export default updateProperties;
