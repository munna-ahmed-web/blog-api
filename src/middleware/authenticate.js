const authenticate = (req, res, next) => {
  req.user = {
    id: "6675392c462500b9d8daaa49",
    name: "Monir  Ahmed",
  };
  next();
};

export default authenticate;
