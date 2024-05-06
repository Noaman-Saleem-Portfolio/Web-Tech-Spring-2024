import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addBook } from "../api/internal";

const AddBook = () => {
  const navigate = useNavigate();
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  // data state object
  const [data, setData] = useState({
    title: "",
    price: "",
    description: "",
    photo: "",
  });
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

    console.log(formData);

    try {
      const response = await addBook(formData);
      console.log(response);
      // console.log(response instanceof Error);
      if (response instanceof Error) {
        throw new Error(response.response.data.message);
      }
      if (response.status === 201) {
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

export default AddBook;
