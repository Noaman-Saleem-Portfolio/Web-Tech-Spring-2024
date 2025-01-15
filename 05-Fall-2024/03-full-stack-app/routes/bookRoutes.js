import express from "express";
import {
  createNewBook,
  deleteBook,
  readAllBooks,
  readBook,
  updateBook,
} from "../controllers/bookController.js";

const router = express.Router();

// create book
router.route("/books").post(createNewBook);

// read all books
router.route("/books").get(readAllBooks);

// read specific book
router.route("/books/:id").get(readBook);

// update specific book
router.route("/books/:id").put(updateBook);

// delete specific book
router.route("/books/:id").delete(deleteBook);

export default router;
