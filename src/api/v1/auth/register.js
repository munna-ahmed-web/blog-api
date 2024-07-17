import authService from "../../../lib/auth/index.js";
import { generateToken } from "../../../lib/token/index.js";

const register = async (req, res, next) => {
  const { name, email, password } = req.body;

  try {
    const user = await authService.register({ name, email, password });
    const payload = {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    };

    const accessToken = generateToken(payload);
    const response = {
      code: 201,
      message: "signup successful",
      data: {
        access_token: accessToken,
      },
      links: {
        self: "auth/register",
        login: "auth/login",
      },
    };

    res.status(201).json(response);
  } catch (error) {
    next(error);
  }
};

export default register;
