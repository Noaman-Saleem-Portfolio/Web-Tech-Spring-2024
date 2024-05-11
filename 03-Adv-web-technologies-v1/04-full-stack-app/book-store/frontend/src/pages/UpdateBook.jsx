import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { readSpecificBook, updateBook } from "../api/internal";

const UpdateBook = () => {
  const navigate = useNavigate();

  const [book, setBook] = useState({});
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // data state object
  const [data, setData] = useState({
    title: book.title,
    price: book.price,
    description: book.description,
    photo: "",
  });

  // reading params
  const params = useParams();
  // console.log(params);
  const bookId = params.id;

  // read specific book
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
  }, []);

  useEffect(() => {
    setData({
      title: book.title,
      price: book.price,
      description: book.description,
      photo: "",
    });
  }, [book]);

  // change handler
  const changeHandler = (e) => {
    setData((pre) => {
      return {
        ...pre,
        [e.target.name]:
          e.target.type === "file" ? e.target.files[0] : e.target.value,
      };
    });
  };
  // submitHandler
  const submitHandler = async () => {
    const { title, price, description, photo } = data;
    // console.log(title, price, description, photo);
    const formData = new FormData();
    formData.append("photo", photo);
    formData.append("title", title);
    formData.append("price", price);
    formData.append("description", description);

    // console.log(formData);

    try {
      const response = await updateBook(formData, bookId);
    //   console.log(response);
      // console.log(response instanceof Error);
      if (response instanceof Error) {
        throw new Error(response.response.data.message);
      }
      if (response.status === 200) {
        navigate("/");
      }
    } catch (err) {
      // console.log("haaaaaaaaaa");
      // console.log(err);
      setIsError(true);
      setErrorMessage(err.message);
    }
  };

  return (
    <>
      {isError && (
        <p className="text-red-700 mx-auto w-[50%] mt-[10px]">{errorMessage}</p>
      )}
      <div className="border-2 border-blue-800/50 w-[50%] mx-auto mt-[20px] flex flex-col p-6 gap-10">
        <input
          className="border-2 border-blue-800/50 p-2 rounded-[5px]"
          type="text"
          placeholder="Book Title"
          name="title"
          value={data.title}
          onChange={changeHandler}
        />
        <input
          className="border-2 border-blue-800/50 p-2 rounded-[5px]"
          type="number"
          placeholder="Book Price"
          name="price"
          value={data.price}
          onChange={changeHandler}
        />
        <textarea
          className="border-2 border-blue-800/50 p-2 rounded-[5px]"
          name="description"
          value={data.description}
          placeholder="Type decription..."
          onChange={changeHandler}
        ></textarea>
        <input
          className="border-2 border-blue-800/50 p-2 rounded-[5px]"
          type="file"
          name="photo"
          value={data.file}
          onChange={changeHandler}
        />
        <button
          onClick={submitHandler}
          className="bg-blue-500 text-white w-[200px] mx-auto py-1 hover:bg-blue-800"
        >
          Add to Database
        </button>
      </div>
    </>
  );
};

export default UpdateBook;
