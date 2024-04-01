import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Services from "./components/Services";

import "./styles/banner.css";

const App = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Services />
      <Contact />
    </>
  );
};

export default App;
