import mongoose from "mongoose";
import { dbName } from "../constants.js";

const dbConnect = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}/${dbName}`);
    console.log("db connect sucessfully");
  } catch (error) {
    console.log("DB not connected", error);
  }
};

export default dbConnect;
