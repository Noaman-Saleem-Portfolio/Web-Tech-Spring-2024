import { rm } from "fs";

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
  res.render("new", { error: null });
};

//////////////////////////////////////
// create book
//////////////////////////////////////
export const createNewBook = async (req, res) => {
  try {
    // req.files contains the uploaded photo
    // console.log(req.files);
    // console.log(req.files.photo[0].path);
    // console.log(req.body);
    let photo;
    if (req.files.photo) {
      photo = req.files.photo[0].path.replaceAll("\\", "/");
    } else {
      photo = "public/assets/placeholder.png";
    }
    const { title, price, description } = req.body;
    // console.log(typeof price);
    if (!title || !price) {
      throw new ErrorHandler("Title and price should not be missing", 400);
    }
    const book = new Book({
      title,
      price,
      description,
      photo,
    });
    // console.log(book);

    // saving new book instance in the DB
    await book.save();
    res.status(201).redirect("/");
  } catch (error) {
    console.log(`OH NO ERROR`);
    console.log(error);
    res.status(error.statusCode).render("new", { error: error.message });
  }
};

//////////////////////////////////////
// read all books
//////////////////////////////////////
export const readAllBooks = async (req, res) => {
  try {
    // throw new ErrorHandler("hahaha");
    const books = await Book.find({});
    res.status(200).render("books", { books });
  } catch (error) {
    console.log(`OH NO ERROR`);
    console.log(error);
    res.redirect("/");
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
    console.log(book);
    if (!book) {
      throw new ErrorHandler(`No book exists in DB with given id =${id}`, 400);
    }
    res.status(200).render("book-detail", { book });
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
// edit book page
//////////////////////////////////////
export const editBookPage = async (req, res) => {
  try {
    const { id } = req.params;
    let book = await Book.findById(id);
    if (!book) {
      throw new ErrorHandler(`No book exists in DB with given id =${id}`, 400);
    }
    res.render("edit", { book });
  } catch (error) {
    console.log(`OH NO ERROR`);
    console.log(error.kind);
    console.log(error.name);
    // handling CastError
    if (error.name === "CastError") {
      res.status(400).redirect("/");
    }
    res.status(error.statusCode).redirect("/");
  }
};

//////////////////////////////////////
// update a book
//////////////////////////////////////
export const updateBook = async (req, res) => {
  try {
    // console.log("In Update Controller");
    // console.log(req.params);
    const { id } = req.params;
    let book = await Book.findById(id);
    if (!book) {
      throw new ErrorHandler(`No book exists in DB with given id =${id}`, 400);
    }
    book = await Book.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).redirect("/books");
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
    // removing photo
    if (book.photo !== "public/assets/placeholder.png") {
      rm(book.photo, () => {
        console.log("Photo Deleted");
      });
    }

    await Book.findByIdAndDelete(id);
    res.redirect("/books");
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
