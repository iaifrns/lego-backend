import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const dbLink = (process.env.ENV == "DEV") ? process.env.MONGO_URI : process.env.MONGO_URI_PROD
    const conn = await mongoose.connect(
      dbLink as string
    );

    console.log(
      `MongoDB Connected: ${conn.connection.host}`
    );
  } catch (error) {
    console.error(
      "MongoDB connection error:",
      error
    );

    process.exit(1);
  }
};

export default connectDB;