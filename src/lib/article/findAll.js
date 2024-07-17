import Article from "../../model/Article.js";
import defaults from "../../config/default.js";

const findAll = async ({
  page = defaults.page,
  limit = defaults.limit,
  sortType = defaults.sortType,
  sortBy = defaults.sortBy,
  search = defaults.search,
}) => {
  const sortStr = `${sortType == "dsc" ? "-" : ""}${sortBy}`;
  const filter = { title: { $regex: search, $options: "i" } };
  let articles = await Article.find(filter)
    // .populate("author")
    .sort(sortStr)
    .skip(page * limit - limit)
    .limit(limit);

  //transformed response
  articles = articles.map((item) => {
    return { ...item._doc, id: item.id };
  });
  const totalItems = await Article.countDocuments(filter);
  return { articles, totalItems };
};

export default findAll;
