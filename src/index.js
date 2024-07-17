import { config } from "dotenv";
import http from "http";
import app from "./app.js";
import connectDB from "./db/connectDB.js";

config(); //here environment variable configured

const server = http.createServer(app);

const main = async () => {
  try {
    await connectDB();
    server.listen(process.env.PORT, () => {
      console.log(`Application is running on the port ${process.env.PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};
main();
