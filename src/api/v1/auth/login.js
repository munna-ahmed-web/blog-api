const login = (req, res, next) => {
  try {
    res.status(200).json({ message: "login success" });
  } catch (error) {
    next(error);
  }
};

export default login;
