import express from "express";
import {
  createNewBook,
  readAllBooks,
  readBook,
} from "../controllers/bookController.js";

const router = express.Router();

// create book
router.route("/books").post(createNewBook);

// read all books
router.route("/books").get(readAllBooks);

// read specific book
router.route("/books/:id").get(readBook);

export default router;
