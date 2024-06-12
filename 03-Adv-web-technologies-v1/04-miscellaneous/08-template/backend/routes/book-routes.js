import express from "express";
import {
  createNewBook,
  deleteBook,
  readAllBooks,
  readBook,
  updateBook,
} from "../controllers/book-controller.js";

const router = express.Router();

// test route
router.route("/test").get((req, res) => {
  res.status(200).json({ message: "Hi mai API ka response hun!" });
});

// create book
router.route("/books").post(createNewBook);

// read all books
router.route("/books").get(readAllBooks);

// read specific book
router.route("/books/:id").get(readBook);

// update book
router.route("/books/:id").patch(updateBook);

// delete book
router.route("/books/:id").delete(deleteBook);

export default router;
