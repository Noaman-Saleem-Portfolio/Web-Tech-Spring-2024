import express from "express";
import {
  createNewBook,
  createNewBookPage,
  deleteBook,
  editBookPage,
  homePage,
  readAllBooks,
  readBook,
  updateBook,
} from "../controllers/book-controller.js";

const router = express.Router();

// index route
router.route("/").get(homePage);

// create book page route
router.route("/books/new").get(createNewBookPage);

// create book
router.route("/books").post(createNewBook);

// read all books
router.route("/books").get(readAllBooks);

// read specific book
router.route("/books/:id").get(readBook);

// edit book page
router.route("/books/:id/edit").get(editBookPage);

// update book
router.route("/books/:id").patch(updateBook);

// delete book
router.route("/books/:id").delete(deleteBook);

export default router;
