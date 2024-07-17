import { Router } from "express";
import articleController from "../api/v1/article/controller/index.js";
import authController from "../api/v1/auth/index.js";
import { findSingleItem } from "../api/v1/article/controller/findSingleItem.js";
import updateOrCreate from "../api/v1/article/controller/updateOrCreate.js";
import updateItemPatch from "../api/v1/article/controller/updateItemPatch.js";
import authenticate from "../middleware/authenticate.js";
import authorize from "../middleware/authorize.js";

const router = Router();

//auth route
router.route("/api/v1/auth/login").post(authController.login);
router.route("/api/v1/auth/register").post(authController.register);

//article route
router
  .route("/api/v1/articles")
  .get(articleController.findAll)
  .post(authenticate, authorize(["user, admin"]), articleController.create);

router
  .route("/api/v1/articles/:id")
  .get(findSingleItem)
  .put(authenticate, updateOrCreate)
  .patch(authenticate, updateItemPatch)
  .delete(authenticate, articleController.removeItem);

export default router;
