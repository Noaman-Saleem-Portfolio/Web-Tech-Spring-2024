import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [isDeleted, setIsDeleted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // console.log("Books Component rendered");
    const readAllBooks = async () => {
      //   console.log("readAllBooks");
      try {
        const response = await axios.get("http://localhost:8000/api/v1/books");
        // console.log(response);
        setBooks(response.data.books);
      } catch (error) {}
    };
    readAllBooks();
  }, [isDeleted]);

  const handleDetails = (id) => {
    navigate(`/book/${id}`);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/v1/books/${id}`);
      setIsDeleted((pre) => !pre);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mx-auto pt-2">
      {books.map((book) => {
        return (
          <div>
            <img src={book.image} alt="" />
            <h2 className="text-2xl">{book.title}</h2>
            <p>{book.price}</p>
            <button
              className="bg-blue-900 text-white p-1"
              onClick={() => handleDetails(book._id)}
            >
              Details
            </button>
            <button
              className="bg-red-900 text-white p-1 ml-3"
              onClick={() => handleDelete(book._id)}
            >
              Delete
            </button>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default Books;
