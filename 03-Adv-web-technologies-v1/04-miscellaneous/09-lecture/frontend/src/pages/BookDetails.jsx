import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BookDetails = () => {
  const [book, setBook] = useState({});
  // reading params
  const params = useParams();
  //   console.log(params);
  const bookId = params.id;

  useEffect(() => {
    const readSpecificBook = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/v1/books/${bookId}`
        );
        // console.log(response);
        setBook(response.data.book);
      } catch (error) {
        console.log(error);
      }
    };
    readSpecificBook();
  }, []);

  return (
    <div className="container mx-auto">
      <div>
        <img src={book.image} alt="" />
        <h2 className="text-2xl">{book.title}</h2>
        <p>{book.price}</p>
        <p>{book.description}</p>
      </div>
    </div>
  );
};

export default BookDetails;
