import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

// Access MONGO_URL only once at the top
const MONGO_URL = process.env.MONGO_URL;

console.log("mongoDB url: ", MONGO_URL); // Log it once here

const conMongoDb = async () => {
  try {
    const conn = await mongoose.connect(MONGO_URL);
    conn && console.log("Mongo Db Connected");
  } catch (error) {
    console.log("MongoDB connection error:", error);
  }
};

export default conMongoDb;
