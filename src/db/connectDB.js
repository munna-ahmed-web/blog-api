import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECTION_URL);
    console.log("Database Connected");
  } catch (error) {
    console.log("Database connection failed");
    console.log("Message:", error.message);
  }
};

export default connectDB;
