import express from "express";
import morgan from "morgan";
import jsYaml from "yamljs";
import swaggerUI from "swagger-ui-express";
const swaggerDocs = jsYaml.load("./swagger.yaml");

const applyMiddleware = (app) => {
  app.use(express.json());
  app.use(morgan("dev"));
  app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));
};

export default applyMiddleware;
