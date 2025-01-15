import mongoose from "mongoose";

const connectDB = async (url) => {
  try {
    const ctt = await mongoose.connect(url);
    console.log(`Connected to MongoDB`);
  } catch (error) {
    console.log("oh no error");
    console.log(error);
  }
};
export default connectDB;
