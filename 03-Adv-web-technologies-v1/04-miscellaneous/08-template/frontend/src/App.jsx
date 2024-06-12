import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import Menubar from "./components/Menubar";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Menubar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
