import articleService from "../../../../lib/article/index.js";

const updateOrCreate = async (req, res, next) => {
  const { id } = req.params;
  const cover = req.body.cover || "";
  const body = req.body.body;
  const title = req.body.title;
  const status = req.body.status || "draft";

  try {
    const { article, code } = await articleService.createOrUpdate(id, {
      author: req.user,
      title,
      body,
      cover,
      status,
    });

    const response = {
      code,
      message:
        code == 200
          ? "Article updated successfully"
          : "Article created successfully",
      data: article,
      links: {
        self: `article/${article.id}`,
      },
    };
    res.status(code).json(response);
  } catch (error) {
    next(error);
  }
};

export default updateOrCreate;
