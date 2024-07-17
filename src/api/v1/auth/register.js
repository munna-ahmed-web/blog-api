import authService from "../../../lib/auth/index.js";

const register = async (req, res, next) => {
  const { name, email, password } = req.body;

  try {
    await authService.register({ name, email, password });
    res.status(200).json({ message: "register success" });
  } catch (error) {
    next(error);
  }
};

export default register;
