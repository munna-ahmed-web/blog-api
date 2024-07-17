import defaults from "../config/default.js";
import { generateQueryString } from "./queryString.js";

export const getPagination = ({
  totalItems = defaults.totalItems,
  limit = defaults.limit,
  page = defaults.page,
}) => {
  const totalPage = Math.ceil(totalItems / limit);
  const pagination = {
    page,
    limit,
    totalItems,
    totalPage,
  };
  if (page < totalPage) {
    pagination.next = parseInt(page) + 1;
  }
  if (page > 1) {
    pagination.prev = page - 1;
  }

  return pagination;
};

export const getHATEOASforAllItems = ({
  url = "/",
  path = "",
  query = {},
  hasNext = false,
  hasPrev = false,
  page = 1,
}) => {
  const links = {
    self: url,
  };
  if (hasNext) {
    const queryStr = generateQueryString({
      ...query,
      page: parseInt(page) + 1,
    });
    links.next = `${path}?${queryStr}`;
  }
  if (hasPrev) {
    const queryStr = generateQueryString({ ...query, page: page - 1 });
    links.prev = `${path}?${queryStr}`;
  }

  return links;
};

export const getTransformedItems = ({
  items = [],
  selection = [],
  path = "/",
}) => {
  if (!Array.isArray(items) || !Array.isArray(selection)) {
    throw new Error("Invalid Arguments");
  }

  if (selection.length == 0) {
    const result = items.map((item) => {
      return {
        ...item,
        link: `${path}/${item.id}`,
      };
    });
    return result;
  }

  return items.map((item) => {
    const result = {};
    selection.forEach((key) => {
      if (item[key]) {
        result[key] = item[key];
      }
    });
    result.link = `${path}/${item.id}`;
    return result;
  });
};
