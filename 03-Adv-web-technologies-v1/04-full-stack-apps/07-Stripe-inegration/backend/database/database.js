import mongoose from "mongoose";

const connectDB = async (url) => {
  try {
    await mongoose.connect(url);
    console.log(`Connected to MongoDB`);
  } catch (error) {
    console.log(`OH NO ERROR`);
    console.log(error);
  }
};

export default connectDB;
