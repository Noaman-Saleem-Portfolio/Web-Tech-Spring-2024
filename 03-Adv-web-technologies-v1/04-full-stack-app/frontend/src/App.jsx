import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";

import Home from "./pages/Home";
import Menubar from "./components/Menubar";
import AddBook from "./pages/AddBook";
import Formik from "./pages/Formik";

function App() {
  return (
    <BrowserRouter>
      <Menubar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/add-book" element={<AddBook />} /> */}
        <Route path="/add-book" element={<Formik />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
