import mongoose from "mongoose";
import dotenv from 'dotenv';

const connectDB = async () => {
    try {
      const conn = await mongoose.connect(
        (process.env.MONGO_URI));
      console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (err) {
      console.error("errorrrrrr", err);
      process.exit(1);
    }
  };
  
  export default connectDB;