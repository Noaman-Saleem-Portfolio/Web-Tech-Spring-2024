import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const navigate = useNavigate();

  const createBook = async () => {
    // console.log(title);
    try {
      const response = await axios.post("http://localhost:8000/api/v1/books", {
        title,
        price,
        description,
        image,
      });
      //   console.log(response);
      navigate("/books");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container mx-auto p-4">
      <input
        type="text"
        placeholder="Title"
        className="block mb-4 border-black border-2"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <input
        type="number"
        placeholder="Price"
        className="block mb-4 border-black border-2"
        onChange={(e) => setPrice(e.target.value)}
        value={price}
      />
      <input
        type="text"
        placeholder="Description"
        className="block mb-4 border-black border-2"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />
      <input
        type="text"
        placeholder="Image URL"
        className="block mb-4 border-black border-2"
        onChange={(e) => setImage(e.target.value)}
        value={image}
      />
      <button className="bg-blue-950 text-white p-2" onClick={createBook}>
        Create Book
      </button>
    </div>
  );
};

export default AddBook;
