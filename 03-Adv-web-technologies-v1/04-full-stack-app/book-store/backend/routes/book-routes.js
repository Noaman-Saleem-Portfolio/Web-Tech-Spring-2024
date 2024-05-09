import express from "express";
import {
  createNewBook,
  deleteBook,
  readAllBooks,
  readBook,
  updateBook,
} from "../controllers/book-controller.js";
import { upload } from "../middlewares/multer.js";

const router = express.Router();

// create book
router.route("/books").post(
  upload.fields([
    {
      name: "photo",
      maxCount: 1,
    },
  ]),
  createNewBook
);

// read all books
router.route("/books").get(readAllBooks);

// read specific book
router.route("/books/:id").get(readBook);

// update book
router.route("/books/:id").patch(updateBook);

// delete book
router.route("/books/:id").delete(deleteBook);

export default router;
