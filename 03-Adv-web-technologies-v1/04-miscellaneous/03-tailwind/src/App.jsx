import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import News from "./pages/News";
import Contact from "./pages/Contact";

// tailwind css
import "./index.css";
import "./styles/news.css";
import Menubar from "./components/Menubar";
import UserData from "./pages/UserData";
import Meme from "./pages/Meme";

function App() {
  return (
    <BrowserRouter>
      <Menubar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/user-data" element={<UserData />} />
        <Route path="/meme" element={<Meme />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
