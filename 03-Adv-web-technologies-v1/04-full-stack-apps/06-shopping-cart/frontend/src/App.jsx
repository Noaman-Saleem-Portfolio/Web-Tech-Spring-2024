import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";

import Home from "./pages/Home";
import Menubar from "./components/Menubar";
import AddBook from "./pages/AddBook";
import Formik from "./pages/Formik";
import Books from "./pages/Books";
import UpdateBook from "./pages/UpdateBook";
import FormikUpdate from "./pages/FormikUpdate";
import BookDetails from "./pages/BookDetails";
import Login from "./pages/Login";
import Protected from "./components/protected";
import { useSelector } from "react-redux";
import { Toaster } from "react-hot-toast";
import Signup from "./pages/Signup";
import Loader from "./components/Loader";
import useAutoLogin from "./hooks/useAutoLogin";
import Cart from "./pages/Cart";

function App() {
  const isAuth = useSelector((state) => state.user.auth);

  const loading = useAutoLogin();

  return loading ? (
    <Loader text="..." />
  ) : (
    <BrowserRouter>
      <Menubar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/add-book"
          element={
            <Protected isAuth={isAuth}>
              <AddBook />
            </Protected>
          }
        />
        {/* <Route path="/add-book" element={<Formik />} /> */}
        <Route path="/books" element={<Books />} />
        <Route
          path="/book-update/:id"
          element={
            <Protected isAuth={isAuth}>
              <UpdateBook />
            </Protected>
          }
        />
        {/* <Route path="/book-update/:id" element={<FormikUpdate />} /> */}
        <Route path="/book-details/:id" element={<BookDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Toaster position="bottom-left" />
    </BrowserRouter>
  );
}

export default App;
