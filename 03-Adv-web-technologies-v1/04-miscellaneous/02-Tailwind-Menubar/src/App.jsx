import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menubar from "./components/Menubar";
import Home from "./pages/Home";
import Service from "./pages/Service";
import Blog from "./pages/Blog";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <BrowserRouter>
      <Menubar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
