import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_SERVER,
  withCredentials: true,
  headers: {
    // "Content-Type": "application/json",
    "Content-Type": "multipart/form-data",
  },
});

// create new book
export const addBook = async (data) => {
  let response;

  try {
    response = await api.post("/books", data);
  } catch (error) {
    // console.log("Error ho gae");
    return error;
  }

  return response;
};

// read all books
export const readBooks = async () => {
  let response;

  try {
    response = await api.get("/books");
  } catch (error) {
    console.log("Error ho gae");
    return error;
  }

  return response;
};

// update a book
export const updateBook = async (data, id) => {
  let response;

  try {
    response = await api.patch(`/books/${id}`, data);
  } catch (error) {
    // console.log("Error ho gae");
    return error;
  }

  return response;
};

// deleteBook a book
export const deleteBook = async (id) => {
  let response;

  try {
    response = await api.delete(`/books/${id}`);
  } catch (error) {
    // console.log("Error ho gae");
    return error;
  }

  return response;
};

// read specific book
export const readSpecificBook = async (id) => {
  let response;

  try {
    response = await api.get(`/books/${id}`);
  } catch (error) {
    // console.log("Error ho gae");
    return error;
  }

  return response;
};
