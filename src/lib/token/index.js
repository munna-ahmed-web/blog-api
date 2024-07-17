import jwt from "jsonwebtoken";

export const generateToken = (
  payload,
  secret = process.env.ACCESS_TOKEN_SECRET
) => {
  try {
    const token = jwt.sign(payload, secret, {
      algorithm: "HS256",
    });
    return token;
  } catch (err) {
    const error = new Error("Internal Server Error");
    error.status = 500;
    throw error;
  }
};

export const decodeToken = (token) => {
  try {
    return jwt.decode(token);
  } catch (err) {
    const error = new Error("Internal Server Error");
    error.status = 500;
    throw error;
  }
};

export const verifyToken = (
  token,
  secret = process.env.ACCESS_TOKEN_SECRET
) => {
  try {
    return jwt.verify(token, secret, {
      algorithms: ["HS256"],
    });
  } catch (err) {
    const error = new Error("Internal Server Error");
    error.status = 500;
    throw error;
  }
};
