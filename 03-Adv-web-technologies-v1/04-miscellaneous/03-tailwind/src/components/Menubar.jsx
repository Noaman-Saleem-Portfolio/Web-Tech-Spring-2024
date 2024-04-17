import React from "react";
import { Link } from "react-router-dom";

const Menubar = () => {
  return (
    <div className="navbar bg-blue-950 h-14 flex items-center">
      <div className="nav bg-blue-950 text-white flex justify-between container mx-auto">
        <div className="logo">
          <Link to="/">Logo</Link>
        </div>

        {/* left */}
        <div className="space-x-5">
          <Link to="/">Home</Link>
          <Link to="/news">News</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/user-data">UserData</Link>
          {/* <a href="/">Home</a>
          <a href="/news">News</a>
          <a href="/contact">Contact</a> */}
        </div>

        {/* right */}
        <div className="space-x-5">
        <Link to="#">Login</Link>
        <Link to="#">Signup</Link>
          {/* <a href="#">Login</a>
          <a href="#">Signup</a> */}
        </div>
      </div>
      {/* nav */}
    </div>
  );
};

export default Menubar;
