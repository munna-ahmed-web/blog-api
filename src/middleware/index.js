import express from "express";
import jsYaml from "yamljs";
import swaggerUI from "swagger-ui-express";
import authenticate from "./authenticate.js";
const swaggerDocs = jsYaml.load("./swagger.yaml");

const applyMiddleware = (app) => {
  app.use(express.json());
  app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));
  app.use(authenticate); //custom middleware that modify the request object
};

export default applyMiddleware;
