import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import News from "./pages/News";
import Contact from "./pages/Contact";
import Menubar from "./components/Menubar";
import Counter from "./pages/Counter";
import Student from "./pages/Student";
import Meme from "./pages/Meme";
import UserData from "./pages/UserData";

function App() {
  return (
    <BrowserRouter> 
      <Menubar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/student" element={<Student />} />
        <Route path="/user-data" element={<UserData />} />
        <Route path="/meme" element={<Meme />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
