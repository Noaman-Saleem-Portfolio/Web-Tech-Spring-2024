import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { readSpecificBook } from "../api/internal";

const BookDetails = () => {
  const [book, setBook] = useState({});
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate()

  // reading params
  const params = useParams();
  // console.log(params);
  const bookId = params.id;

  // fetching book from DB
  useEffect(() => {
    const readBook = async () => {
      try {
        const response = await readSpecificBook(bookId);
        // console.log(response);
        // console.log(response instanceof Error);
        if (response instanceof Error) {
          // to handle server down error
          if (response.code == "ERR_NETWORK") {
            throw new Error(response.message);
          }
          throw new Error(response.response.data.message);
        }
        setBook(response.data.book);
      } catch (err) {
        console.log("OH NO ERROR");
        console.log(err);
        setIsError(true);
        setErrorMessage(err.message);
      }
    };
    readBook();
  },[]);

  // handleUpdate
  const handleUpdate = (id)=> {
    navigate(`/book-update/${id}`)
  }

  return (
    <div className="mx-auto w-[88%]">
      <h1 className="text-[32px] font-bold my-[20px]">Books Details</h1>
      {isError && (
        <p className="text-red-700 mx-auto w-[50%] mt-[10px]">{errorMessage}</p>
      )}
        <div className="flex justify-around flex-wrap gap-y-11">
            {/* console.log(`${import.meta.env.VITE_SERVER}/${book.photo}`); */}
              <div className="shadow-lg ">
                <div className="flex justify-center">
                  <img
                    className="h-[250px] w-[250px] "
                    src={`${import.meta.env.VITE_SERVER_IMAGES}/${book.photo}`}
                    alt="book image here"
                  />
                </div>
                <h4 className="text-[20px] font-bold">{book.title}</h4>
                <p className="">Rs : {book.price}</p>
                {book.description ? <p>{book.description}</p> : <p>No Description available for this book</p> }
                <div className="my-[15px] space-x-3">
                  <button onClick={()=> handleUpdate(book._id)} className="bg-blue-950 text-[#fff] p-[5px] rounded-xl">Update</button>
                 
                </div>
                <hr />
              </div>
        </div>
    </div>
  );
};

export default BookDetails;
