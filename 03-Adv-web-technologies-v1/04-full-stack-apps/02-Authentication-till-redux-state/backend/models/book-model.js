import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please enter Title"],
  },
  price: {
    type: String,
    required: [true, "Please enter Price"],
  },
  description: {
    type: String,
    default: "No description entered...",
  },
  photo: {
    type: String,
  },
});

const Book = mongoose.model("Book", bookSchema);

export default Book;
