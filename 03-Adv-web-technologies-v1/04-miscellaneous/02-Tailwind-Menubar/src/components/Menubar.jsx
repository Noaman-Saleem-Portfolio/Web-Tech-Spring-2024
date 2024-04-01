import React from "react";
import { Link } from "react-router-dom";

const Menubar = () => {
  return (
    <div className="navbar h-[60px] bg-blue-950 flex items-center font-medium text-lg">
      <nav className="bg-blue-950 text-white flex justify-between container mx-auto">
        <div>Logo</div>
        <div className="left right space-x-10">
          {/* <a href="/">Home</a>
          <a href="/service">Service</a>
          <a href="/blog">Blog</a> */}
          <Link to="/">Home</Link>
          <Link to="/service">Service</Link>
          <Link to="/blog">Blog</Link>
        </div>
        {/* left */}
        <div className="right space-x-10">
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </div>
        {/* right */}
      </nav>
    </div>
    // navbar
  );
};

export default Menubar;
