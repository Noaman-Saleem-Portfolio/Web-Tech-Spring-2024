import mongoose from "mongoose";

const connectDB = async (url) => {
  try {
    await mongoose.connect(
      "mongodb+srv://noaman2266:nomibhai@cluster0.2lsn92w.mongodb.net/book_berry?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log(`Connected to MongoDB`);
  } catch (error) {
    console.log(`OH NO ERROR`);
    console.log(error);
  }
};

export default connectDB;
