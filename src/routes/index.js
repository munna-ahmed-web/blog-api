import { Router } from "express";
import articleController from "../api/v1/article/controller/index.js";
import authController from "../api/v1/auth/index.js";
import { findSingleItem } from "../api/v1/article/controller/findSingleItem.js";
import updateOrCreate from "../api/v1/article/controller/updateOrCreate.js";
import updateItemPatch from "../api/v1/article/controller/updateItemPatch.js";

const router = Router();

//auth route
router.route("/api/v1/auth/login").post(authController.login);
router.route("/api/v1/auth/register").post(authController.register);

//article route
router
  .route("/api/v1/articles")
  .get(articleController.findAll)
  .post(articleController.create);

router
  .route("/api/v1/articles/:id")
  .get(findSingleItem)
  .put(updateOrCreate)
  .patch(updateItemPatch)
  .delete(articleController.removeItem);

export default router;
