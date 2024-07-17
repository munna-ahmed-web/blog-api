import articleService from "../../../../lib/article/index.js";

const removeItem = async (req, res, next) => {
  const { id } = req.params;
  try {
    await articleService.removeItem(id);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

export default removeItem;
