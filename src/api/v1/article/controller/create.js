import articleService from "../../../../lib/article/index.js";

const create = async (req, res, next) => {
  const { title, body, cover, status, author } = req.body;
  try {
    const article = await articleService.create({
      title,
      body,
      cover,
      status,
      author: req.user.id,
    });
    const response = {
      code: 201,
      message: "Article created successfully",
      data: { ...article._doc },
      links: {
        self: `/articles/${article.id}`,
        author: `/articles/${article.id}/author`,
        comments: `/articles/${article.id}/comments`,
      },
    };
    res.status(201).json(response);
  } catch (error) {
    next(error);
  }
};

export default create;
