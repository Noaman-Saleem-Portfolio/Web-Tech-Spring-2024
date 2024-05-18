import React, { useEffect, useState } from "react";
import { deleteBook, readBooks } from "../api/internal";
import { useNavigate, Navigate } from "react-router-dom";

const Books = () => {
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [books, setBooks] = useState([]);
  const [isDeleted, setIsDeleted] = useState(false);

  const navigate = useNavigate();

  // console.log(books.length);

  useEffect(() => {
    const readAllBooks = async () => {
      try {
        const response = await readBooks();
        // console.log(response);
        // console.log(response instanceof Error);
        if (response instanceof Error) {
          // to handle server down error
          if (response.code == "ERR_NETWORK") {
            throw new Error(response.message);
          }
          throw new Error(response.response.data.message);
        }
        setBooks(response.data.books);
      } catch (err) {
        console.log("OH NO ERROR");
        console.log(err);
        setIsError(true);
        setErrorMessage(err.message);
      }
    };
    readAllBooks();
  }, [isDeleted]);

  // handleUpdate
  const handleUpdate = (id) => {
    navigate(`/book-update/${id}`);
  };

  // handleDetails
  const handleDetails = (id) => {
    navigate(`/book-details/${id}`);
  };

  // handleDelete
  const handleDelete = async (bookId) => {
    try {
      const response = await deleteBook(bookId);
      // console.log(response);
      // console.log(response instanceof Error);
      if (response instanceof Error) {
        // to handle server down error
        if (response.code == "ERR_NETWORK") {
          throw new Error(response.message);
        }
        throw new Error(response.response.data.message);
      }
      // navigate("/");
      // return <Navigate to="/books" />;
      setIsDeleted((pre) => !pre);
    } catch (err) {
      console.log("OH NO ERROR");
      console.log(err);
      setIsError(true);
      setErrorMessage(err.message);
    }
  };

  return (
    <div className="mx-auto w-[88%]">
      <h1 className="text-[32px] font-bold my-[20px]">Books Collection</h1>
      {isError && (
        <p className="text-red-700 mx-auto w-[50%] mt-[10px]">{errorMessage}</p>
      )}
      {books.length === 0 ? (
        <p>No Books available to display at the moment.</p>
      ) : (
        <div className="flex justify-around flex-wrap gap-y-11">
          {books.map((book) => {
            // console.log(`${import.meta.env.VITE_SERVER}/${book.photo}`);
            return (
              <div className="shadow-lg basis-80" key={book._id}>
                <div className="flex justify-center">
                  <img
                    className="h-[250px] w-[250px] "
                    src={`${import.meta.env.VITE_SERVER_IMAGES}/${book.photo}`}
                    alt="book image here"
                  />
                </div>
                <h4 className="text-[20px] font-bold">{book.title}</h4>
                <p className="">Rs : {book.price}</p>
                <div className="my-[15px] space-x-3">
                  <button
                    onClick={() => handleUpdate(book._id)}
                    className="bg-blue-950 text-[#fff] p-[5px] rounded-xl"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDetails(book._id)}
                    className="bg-green-950 text-[#fff] p-[5px] rounded-xl"
                  >
                    Details
                  </button>
                  <button
                    onClick={() => handleDelete(book._id)}
                    className="bg-red-700 text-[#fff] p-[5px] rounded-xl"
                  >
                    Delete
                  </button>
                </div>
                <hr />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Books;
