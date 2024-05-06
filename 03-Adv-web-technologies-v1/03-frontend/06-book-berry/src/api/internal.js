import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_SERVER,
  withCredentials: true,
  headers: {
    // "Content-Type": "application/json",
    "Content-Type": "multipart/form-data",
  },
});

export const addBook = async (data) => {
  let response;

  try {
    response = await api.post("/books", data);
  } catch (error) {
    return error;
  }

  return response;
};
