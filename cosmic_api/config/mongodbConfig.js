import mongoose from "mongoose";

const MONGO_URL = "mongodb://localhost:27017/cosmic_db";

const conMongoDb = async () => {
  try {
    const conn = await mongoose.connect(MONGO_URL);
    conn && console.log("Mongo Db Connected");
  } catch (error) {
    console.log(error);
  }
};

export default conMongoDb;
