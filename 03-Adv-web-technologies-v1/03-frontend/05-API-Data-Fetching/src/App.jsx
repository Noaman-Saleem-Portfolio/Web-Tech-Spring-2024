import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import News from "./pages/News";
import Contact from "./pages/Contact";
import Menubar from "./components/Menubar";
import Crypto from "./pages/Crypto";

function App() {
  return (
    <BrowserRouter>
      <Menubar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/crypto" element={<Crypto />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
