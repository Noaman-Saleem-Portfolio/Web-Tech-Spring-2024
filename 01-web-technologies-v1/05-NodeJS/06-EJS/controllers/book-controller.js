import Book from "../models/book-model.js";
import ErrorHandler from "../utils/error-class.js";

//////////////////////////////////////
// Home
//////////////////////////////////////
export const homePage = async (req, res) => {
  res.render("index");
};

//////////////////////////////////////
// create book page
//////////////////////////////////////
export const createNewBookPage = (req, res) => {
  res.render("new");
};

//////////////////////////////////////
// create book
//////////////////////////////////////
export const createNewBook = async (req, res) => {
  try {
    // console.log(req.body);
    const { title, price, description } = req.body;
    // console.log(typeof price);
    const book = new Book({
      title,
      price,
      description,
    });

    if (!title || !price) {
      throw new ErrorHandler("Title and price should not be missing", 400);
    }

    // saving new book instance in the DB
    await book.save();
    res.status(201).json({
      success: true,
      message: "New book created in DB",
      book,
    });
  } catch (error) {
    console.log(`OH NO ERROR`);
    console.log(error);
    res.status(error.statusCode).json({
      success: false,
      message: error.message,
    });
  }
};

//////////////////////////////////////
// read all books
//////////////////////////////////////
export const readAllBooks = async (req, res) => {
  try {
    // throw new ErrorHandler("hahaha");
    const books = await Book.find({});
    res.status(200).json({
      success: true,
      message: "All books fetched from DB",
      count: books.length,
      books,
    });
  } catch (error) {
    console.log(`OH NO ERROR`);
    console.log(error);
    res.json({
      success: false,
      message: error.message,
    });
  }
};

//////////////////////////////////////
// read a specific book
//////////////////////////////////////
export const readBook = async (req, res) => {
  try {
    // console.log(req.params);
    const { id } = req.params;
    const book = await Book.findById(id);
    if (!book) {
      throw new ErrorHandler(`No book exists in DB with given id =${id}`, 400);
    }
    res.status(200).json({
      success: true,
      message: "The specific book fetched from DB",
      book,
    });
  } catch (error) {
    console.log(`OH NO ERROR`);
    console.log(error);
    res.status(error.statusCode).json({
      success: false,
      message: error.message,
    });
  }
};

//////////////////////////////////////
// update a book
//////////////////////////////////////
export const updateBook = async (req, res) => {
  try {
    // console.log(req.params);
    const { id } = req.params;
    let book = await Book.findById(id);
    if (!book) {
      throw new ErrorHandler(`No book exists in DB with given id =${id}`, 400);
    }
    book = await Book.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json({
      success: true,
      message: "The book updated in DB",
      book,
    });
  } catch (error) {
    console.log(`OH NO ERROR`);
    console.log(error.kind);
    console.log(error.name);
    // handling CastError
    if (error.name === "CastError") {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
    res.status(error.statusCode).json({
      success: false,
      message: error.message,
    });
  }
};

//////////////////////////////////////
// delete a book
//////////////////////////////////////
export const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    let book = await Book.findById(id);
    if (!book) {
      throw new ErrorHandler(`No book exists in DB with given id =${id}`, 400);
    }
    await Book.findByIdAndDelete(id);
    res.json({
      success: true,
      message: "The book deleted from DB",
    });
  } catch (error) {
    console.log(`OH NO ERROR`);
    console.log(error.kind);
    console.log(error);
    res.status(error.statusCode).json({
      success: false,
      message: error.message,
    });
  }
};
