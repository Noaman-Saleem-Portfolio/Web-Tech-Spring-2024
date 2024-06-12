import mongoose from "mongoose";

const connectDB = async (url) => {
  try {
    await mongoose.connect(
      "mongodb+srv://noaman:12345@cluster0.qm1fea7.mongodb.net/book-berry?retryWrites=true&w=majority&appName=Cluster00"
    );
    console.log(`Connected to MongoDB`);
  } catch (error) {
    console.log(`OH NO ERROR`);
    console.log(error);
  }
};

export default connectDB;
