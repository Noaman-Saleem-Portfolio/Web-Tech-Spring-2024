import React, { useEffect, useState } from "react";
import { readBooks } from "../api/internal";

const Books = () => {
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [books, setBooks] = useState([]);

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
  }, []);
  return (
    <div className="mx-auto w-[88%]">
      <h1 className="text-[32px] font-bold my-[20px]">Books Collection</h1>
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
