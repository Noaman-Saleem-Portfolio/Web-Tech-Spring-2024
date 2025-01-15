import Book from "../models/book-model.js";

// ///////////////////////////////////////////
// Create new book
// //////////////////////////////////////////
export const createNewBook = async (req, res) => {
  // console.log(process.env.MONGO_URI);
  // console.log(req.body);

  try {
    const book = new Book(req.body);
    await book.save();
    res.status(201).json({
      msg: "This API will create new book in DB",
      book,
    });
  } catch (error) {
    console.log("OH NO ERROR");
    console.log(error);
    res.status(400).json({
      msg: error.message,
      error,
    });
  }
};

// ///////////////////////////////////////////
// Read all books
// //////////////////////////////////////////
export const readAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    const quantity = books.length;
    // res.status(200).json({
    //   quantity,
    //   books,
    // });
    console.log(books);

    res.render("books.ejs", { books });
  } catch (error) {
    console.log("OH NO ERROR");
    console.log(error);
    res.status(500).json({
      msg: error.message,
      error,
    });
  }
};

// ///////////////////////////////////////////
// Read specific book
// //////////////////////////////////////////
export const readBook = async (req, res) => {
  // console.log(req.params);
  const { id } = req.params;

  try {
    const book = await Book.findById(id);
    // res.status(200).json({
    //   success: true,
    //   message: "The specific book fetched from DB",
    //   book,
    // });
    res.render("details", { book });
  } catch (error) {
    console.log("OH NO ERROR");
    console.log(error);
    res.status(500).json({
      msg: error.message,
      error,
    });
  }
};

// ///////////////////////////////////////////
// Update specific book
// //////////////////////////////////////////
export const updateBook = async (req, res) => {
  const { id } = req.params;
  // console.log(id);
  console.log(req.body);

  try {
    const book = await Book.findByIdAndUpdate(id, req.body, { new: true });
    // console.log(book);

    res.status(200).json({
      message: "The specific book Updated in DB",
      book,
    });
  } catch (error) {
    console.log("OH NO ERROR");
    console.log(error);
    res.status(500).json({
      msg: error.message,
      error,
    });
  }
};

// ///////////////////////////////////////////
// Delete specific book
// //////////////////////////////////////////
export const deleteBook = async (req, res) => {
  const { id } = req.params;
  // console.log(id);
  // console.log(req.body);

  try {
    await Book.findByIdAndDelete(id);

    res.status(200).json({
      message: "The specific book Deleted from DB",
    });
  } catch (error) {
    console.log("OH NO ERROR");
    console.log(error);
    res.status(500).json({
      msg: error.message,
      error,
    });
  }
};
