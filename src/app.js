import express from "express";
import applyMiddleware from "./middleware/index.js";
import router from "./routes/index.js";

const app = express();
applyMiddleware(app);
app.use(router);

app.get("/", (req, res) => {
  res.send({
    message: "Everything looks fine",
    user: req.user,
  });
});

// app.use("*", (req, res, next) => {
//   const error = new Error("Requested resource not found");
//   error.code = 404;
//   error.errors = "Not Found";
//   next(error);
// });

app.use((err, req, res, next) => {
  console.log(err);
  res.status(err.status || 500).json({
    message: err.message,
    error: err.errors,
  });
});

export default app;
