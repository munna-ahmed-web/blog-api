import Article from "../../model/Article.js";

export const findSingleItem = async ({ id, expand = "" }) => {
  if (!id) throw new Error("id is required");

  expand = expand.split(",").map((item) => item.trim());

  const article = await Article.findById(id);
  if (!article) {
    const error = new Error("Resource not found");
    error.status = 404;
    throw error;
  }
  if (expand.includes("author")) {
    await article.populate({
      path: "author",
      select: "name",
      strictPopulate: false,
    });
  }
  if (expand.includes("comment")) {
    await article.populate({
      path: "comments",
      strictPopulate: false,
    });
  }

  return {
    ...article._doc,
    id: article.id,
  };
};
