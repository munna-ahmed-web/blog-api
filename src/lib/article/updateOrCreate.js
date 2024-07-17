import Article from "../../model/Article.js";

const createOrUpdate = async (
  id,
  { title, body, author, cover = "", status = "draft" }
) => {
  const article = await Article.findById(id);
  if (!article) {
    const article = new Article({ title, body, author, cover, status });
    await article.save();
    return {
      article: { ...article._doc, id: article.id },
      code: 201,
    };
  }

  const payload = { title, body, cover, status, author: author.id };
  article.overwrite(payload);
  await article.save();
  return { article: { ...article._doc, id: article.id }, code: 200 };
};

export default createOrUpdate;
