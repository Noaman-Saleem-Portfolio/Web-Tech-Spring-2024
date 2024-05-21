import { useFormik } from "formik";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import signupSchema from "../schemas/signupSchema";
import { signupUser } from "../api/internal";

const Signup = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const submitHandler = async () => {
    const { name, email, password } = values;
    // console.log(name, email, password);
    const data = { email, password,name };
    try {
        const response = await signupUser(data);
        // console.log(response);
        // console.log(response instanceof Error);
        if (response instanceof Error) {
          // to handle server down error
          if (response.code == "ERR_NETWORK") {
            throw new Error(response.message);
          }
          throw new Error(response.response.data.message);
        }
        if (response.status === 201) {
         
          // 1. redirect -> login page
          navigate("/login");
        }
      } catch (err) {
        // console.log("haaaaaaaaaa");
        // console.log(err);
        setIsError(true);
        setErrorMessage(err.message);
      }
  };

  const { values, touched, handleBlur, handleChange, errors, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
        name: "",
      },
      validationSchema: signupSchema,
      onSubmit: submitHandler,
    });
  return (
    <>
      {isError && (
        <p className="text-red-700 mx-auto w-[50%] mt-[10px]">{errorMessage}</p>
      )}
      <form onSubmit={handleSubmit}>
        <div className="border-2 border-blue-800/50 w-[50%] mx-auto mt-[20px] flex flex-col p-6 gap-10 items-stretch">
          <input
            className="border-2 border-blue-800/50 p-2 rounded-[5px]"
            type="text"
            placeholder="Name"
            name="name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
          />
          {touched.name && errors.name ? (
            <div className="text-red-600 my-0">{errors.name}</div>
          ) : null}

          <input
            className="border-2 border-blue-800/50 p-2 rounded-[5px]"
            type="text"
            placeholder="Email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {touched.email && errors.email ? (
            <div className="text-red-600 my-0">{errors.email}</div>
          ) : null}

          <input
            className="border-2 border-blue-800/50 p-2 rounded-[5px]"
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          {touched.password && errors.password ? (
            <div className="text-red-600 my-0">{errors.password}</div>
          ) : null}

          <button
            type="submit"
            className="bg-blue-500 text-white w-[200px] mx-auto py-1 hover:bg-blue-800"
          >
            Sign Up
          </button>
        </div>
      </form>
    </>
  );
};

export default Signup;
