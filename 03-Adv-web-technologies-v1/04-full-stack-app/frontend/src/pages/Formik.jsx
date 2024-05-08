import { useFormik } from "formik";
import React from "react";
import bookSchema from "../schemas/bookSchema";

const Formik = () => {
  const { values, touched, handleBlur, handleChange, errors } = useFormik({
    initialValues: {
      title: "",
      price: 0,
      description: "",
      photo: "",
    },
    validationSchema: bookSchema,
  });

  const submitHandler = async () => {
    console.log(errors);
  };
  return (
    <div className="border-2 border-blue-800/50 w-[50%] mx-auto mt-[20px] flex flex-col p-6 gap-10">
      <input
        className="border-2 border-blue-800/50 p-2 rounded-[5px]"
        type="text"
        placeholder="Book Title"
        name="title"
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <input
        className="border-2 border-blue-800/50 p-2 rounded-[5px]"
        type="number"
        placeholder="Book Price"
        name="price"
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <textarea
        className="border-2 border-blue-800/50 p-2 rounded-[5px]"
        name="description"
        placeholder="Type decription..."
        onChange={handleChange}
        onBlur={handleBlur}
      ></textarea>
      <input
        className="border-2 border-blue-800/50 p-2 rounded-[5px]"
        type="file"
        name="photo"
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <button
        onClick={submitHandler}
        className="bg-blue-500 text-white w-[200px] mx-auto py-1 hover:bg-blue-800"
      >
        Add to Database
      </button>
    </div>
  );
};

export default Formik;
