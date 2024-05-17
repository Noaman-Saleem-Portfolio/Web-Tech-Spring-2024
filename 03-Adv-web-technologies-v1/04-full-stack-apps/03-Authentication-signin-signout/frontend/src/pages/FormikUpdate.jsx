import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import bookSchema from "../schemas/bookSchema";
import { useNavigate, useParams } from "react-router-dom";
import { readSpecificBook, updateBook } from "../api/internal";

const FormikUpdate = () => {
  const navigate = useNavigate();
  const [book, setBook] = useState({});
  const [photo, setPhoto] = useState({});
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // reading params
  const params = useParams();
  //    console.log(params);
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

  const submitHandler = async () => {
    // values.smily = "hahaha";
    const { title, price, description } = values;
    // console.log(title, price, description, photo);
    // console.log(values);
    const formData = new FormData();
    formData.append("photo", photo);
    formData.append("title", title);
    formData.append("price", price);
    formData.append("description", description);

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

  const {
    values,
    touched,
    handleBlur,
    handleChange,
    errors,
    handleSubmit,
  } = useFormik({
    initialValues: {
      title: book.title,
      price: book.price,
      description: book.description,
    },
    enableReinitialize: true,
    validationSchema: bookSchema,
    onSubmit: submitHandler,
  });

  return (
    <>
      <p>Formik Update</p>
      {isError && (
        <p className="text-red-700 mx-auto w-[50%] mt-[10px]">{errorMessage}</p>
      )}
      <form onSubmit={handleSubmit}>
        <div className="border-2 border-blue-800/50 w-[50%] mx-auto mt-[20px] flex flex-col p-6 gap-10">
          <div>
            <input
              className="border-2 border-blue-800/50 p-2 rounded-[5px] w-[100%]"
              type="text"
              placeholder="Book Title"
              name="title"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}
            />
            {touched.title && errors.title ? (
              <div className="text-red-600 my-0">{errors.title}</div>
            ) : null}
          </div>
          <div>
            <input
              className="border-2 border-blue-800/50 p-2 rounded-[5px] w-[100%]"
              type="number"
              placeholder="Book Price"
              name="price"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.price}
            />
            {touched.price && errors.price ? (
              <div className="text-red-600 my-0">{errors.price}</div>
            ) : null}
          </div>
          <div>
            <textarea
              className="border-2 border-blue-800/50 p-2 rounded-[5px] w-[100%]"
              name="description"
              placeholder="Type decription..."
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.description}
            ></textarea>
            {touched.description && errors.description ? (
              <div className="text-red-600 my-0">{errors.description}</div>
            ) : null}
          </div>
          <div>
            <input
              className="border-2 border-blue-800/50 p-2 rounded-[5px] w-[100%]"
              type="file"
              name="photo"
              onBlur={handleBlur}
              onChange={(e) => setPhoto(e.target.files[0])}
              
            />
            {errors.photo ? (
              <div className="text-red-600 my-0">{errors.photo}</div>
            ) : null}
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white w-[200px] mx-auto py-1 hover:bg-blue-800"
          >
            Add to Database
          </button>
        </div>
      </form>
    </>
  );
};

export default FormikUpdate;
