import mongoose from "mongoose";

export const connectDB = async (uri) => {
  try {
    const c = await mongoose.connect(uri, {
      dbName: "Travel-App-Mern",
    });
    console.log(`DB Connected to ${c.connection.host}`);
  } catch (error) {
    console.log(`Oh nO Error`);
    console.log(error);
  }
};
