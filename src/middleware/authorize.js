import { verifyToken } from "../lib/token/index.js";
import { findUserByEmail } from "../lib/user/index.js";

const authorize =
  (roles = []) =>
  (req, res, next) => {
    if (roles.includes(req.user.role)) {
      return next();
    }
    const error = new Error("Authorization Error");
    error.status = 401;
    return next(error);
  };

export default authorize;
