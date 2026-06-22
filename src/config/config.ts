import { MongoClient, ServerApiVersion } from "mongodb";
import mongoose from "mongoose";

/* const client = new MongoClient(process.env.MONGO_URI_PROD as string, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
}); */

const connectDB = async () => {
  try {
    if (process.env.NODE_ENV == "development") {
      const conn = await mongoose.connect(process.env.MONGO_URI as string);
      console.log(`MongoDB Connected: ${conn.connection.host}`);
    } else {
      const conn = await mongoose.connect(
        process.env.MONGO_URI_PROD as string,
        {
          dbName: "Data_Analyse_Work",
        },
      );
      console.log(
        `Pinged your deployment. You successfully connected to MongoDB! ${conn.connection.host}`,
      );
    }
  } catch (error) {
    console.error("MongoDB connection error:", error);

    process.exit(1);
  }
};

export default connectDB;
