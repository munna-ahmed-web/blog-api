import articleService from "../../../../lib/article/index.js";
import defaults from "../../../../config/default.js";
import {
  getHATEOASforAllItems,
  getPagination,
  getTransformedItems,
} from "../../../../utils/query.js";

//controller
const findAll = async (req, res, next) => {
  const page = req.query.page || defaults.page;
  const limit = req.query.limit || defaults.limit;
  const sortType = req.query.sort_type || defaults.sortType;
  const sortBy = req.query.sort_by || defaults.sortBy;
  const search = req.query.search || defaults.search;

  try {
    const { articles, totalItems } = await articleService.findAll({
      page,
      limit,
      sortType,
      sortBy,
      search,
    });

    //response generation
    const data = getTransformedItems({
      items: articles,
      path: "/articles",
      // selection: ["id", "title", "body", "author"],
    });

    //pagination
    const pagination = getPagination({
      totalItems,
      limit: parseInt(limit),
      page: parseInt(page),
    });

    //links
    const links = getHATEOASforAllItems({
      url: req.url,
      path: req.path,
      query: req.query,
      hasNext: !!pagination.next,
      hasPrev: !!pagination.prev,
      page,
    });

    res.status(200).json({
      data,
      pagination,
      links,
      totalItems,
    });
  } catch (error) {
    next(error);
  }
};

export default findAll;
