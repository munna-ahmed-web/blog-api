import { hashMatched } from "../../utils/hashing.js";
import { generateToken } from "../token/index.js";
import { findUserByEmail } from "../user/index.js";

const login = async ({ email, password }) => {
  const user = await findUserByEmail(email);
  if (!user) {
    const error = new Error("Invalid Credentials");
    error.status = 404;
    throw error;
  }

  const matched = await hashMatched(password, user.password);
  if (!matched) {
    const error = new Error("Invalid Credentials");
    error.status = 404;
    throw error;
  }

  const payload = {
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
  };

  const accessToken = generateToken(payload);

  return accessToken;
};

export default login;
