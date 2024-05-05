import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Menubar from "./components/Menubar";

import "./index.css";
import AddBook from "./pages/AddBook";

function App() {
  return (
    <BrowserRouter>
      <Menubar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-book" element={<AddBook />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
