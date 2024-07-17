import { verifyToken } from "../lib/token/index.js";
import { findUserByEmail } from "../lib/user/index.js";

const authenticate = async (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  try {
    const decoded = verifyToken(token);
    const user = await findUserByEmail(decoded.email);
    if (!user) {
      const error = new Error("Authentication Failed");
      error.status = 401;
      next(error);
    }
    if (user.status !== "approved") {
      const error = new Error(`Your account is ${user.status}`);
      error.status = 401;
      next(error);
    }

    req.user = user._doc;
    next();
  } catch (e) {
    const error = new Error("Authentication Failed");
    error.status = 401;
    next(error);
  }
};

export default authenticate;
