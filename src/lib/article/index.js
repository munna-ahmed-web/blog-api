import findAll from "./findAll.js";
import create from "./create.js";
import { findSingleItem } from "./findSingleItem.js";
import createOrUpdate from "./updateOrCreate.js";
import updateProperties from "./updateProperties.js";
import removeItem from "./removeItem.js";

const articleService = {
  findAll,
  create,
  findSingleItem,
  createOrUpdate,
  updateProperties,
  removeItem,
};

export default articleService;
