import Article from "../../model/Article.js";

const removeItem = async (id) => {
  const article = await Article.findById(id);
  if (!article) {
    const error = new Error("Resource not found");
    error.status = 404;
    throw error;
  }

  return Article.findByIdAndDelete(id);
};

export default removeItem;
