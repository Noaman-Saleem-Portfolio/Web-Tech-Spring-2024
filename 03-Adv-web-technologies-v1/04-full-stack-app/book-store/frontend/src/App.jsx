import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";

import Home from "./pages/Home";
import Menubar from "./components/Menubar";
import AddBook from "./pages/AddBook";
import Formik from "./pages/Formik";
import Books from "./pages/Books";
import UpdateBook from "./pages/UpdateBook";
import FormikUpdate from "./pages/FormikUpdate";

function App() {
  return (
    <BrowserRouter>
      <Menubar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-book" element={<AddBook />} />
        {/* <Route path="/add-book" element={<Formik />} /> */}
        <Route path="/books" element={<Books />} />
        <Route path="/book-update/:id" element={<UpdateBook />} />
        {/* <Route path="/book-update/:id" element={<FormikUpdate />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
