import "../styles/menubar.css";

const Menubar = () => {
  return (
    // style={{backgroundColor: "blue"}}
    <div style={{ backgroundColor: "blue" }}>
      <div className="container">
        <nav className="nav">
          <a href="#">Home</a>
          <a href="#">Blog</a>
          <a href="#">Contact</a>
          <a href="#">Our Team</a>
        </nav>
      </div>
      {/* container */}
    </div>
  );
};

export default Menubar;
