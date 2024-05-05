import { rm } from "fs";
import { TryCatch } from "../middlewares/error.js";
import Book from "../models/book-model.js";
import ErrorHandler from "../utils/error-class.js";

//////////////////////////////////////
// create book
//////////////////////////////////////
export const createNewBook = TryCatch(async (req, res, next) => {
  // console.log(req.body);
  // console.log(req.files.photo[0].path);
  let photo;
  // to tackle can not read property of undefined error if no image is being sent from frontend
  if (req.files.photo) {
    photo = req.files.photo[0].path;
  } else {
    photo = "public/assets/placeholder.png";
  }

  const { title, price, description } = req.body;
  // console.log(typeof price);
  const book = new Book({
    title,
    price,
    description,
    photo,
  });

  if (!title || !price) {
    return next(new ErrorHandler("Title and price should not be missing", 400));
  }

  // saving new book instance in the DB
  await book.save();
  res.status(201).json({
    success: true,
    message: "New book created in DB",
    book,
  });
});

//////////////////////////////////////
// read all books
//////////////////////////////////////
export const readAllBooks = TryCatch(async (req, res) => {
  // throw new ErrorHandler("hahaha");
  const books = await Book.find({});
  res.status(200).json({
    success: true,
    message: "All books fetched from DB",
    count: books.length,
    books,
  });
});

//////////////////////////////////////
// read a specific book
//////////////////////////////////////
export const readBook = TryCatch(async (req, res, next) => {
  // console.log(req.params);
  const { id } = req.params;
  const book = await Book.findById(id);
  if (!book) {
    return next(
      new ErrorHandler(`No book exists in DB with given id =${id}`, 400)
    );
  }
  res.status(200).json({
    success: true,
    message: "The specific book fetched from DB",
    book,
  });
});

//////////////////////////////////////
// update a book
//////////////////////////////////////
export const updateBook = TryCatch(async (req, res, next) => {
  // console.log(req.params);
  const { id } = req.params;
  let book = await Book.findById(id);
  if (!book) {
    return next(
      new ErrorHandler(`No book exists in DB with given id =${id}`, 400)
    );
  }
  book = await Book.findByIdAndUpdate(id, req.body, { new: true });
  res.status(200).json({
    success: true,
    message: "The book updated in DB",
    book,
  });
});

//////////////////////////////////////
// delete a book
//////////////////////////////////////
export const deleteBook = TryCatch(async (req, res, next) => {
  const { id } = req.params;
  let book = await Book.findById(id);
  if (!book) {
    return next(
      new ErrorHandler(`No book exists in DB with given id =${id}`, 400)
    );
  }
  // removing photo
  if (book.photo !== "public/assets/placeholder.png") {
    rm(book.photo, () => {
      console.log("Photo Deleted");
    });
  }
  await Book.findByIdAndDelete(id);
  res.json({
    success: true,
    message: "The book deleted from DB",
  });
});
