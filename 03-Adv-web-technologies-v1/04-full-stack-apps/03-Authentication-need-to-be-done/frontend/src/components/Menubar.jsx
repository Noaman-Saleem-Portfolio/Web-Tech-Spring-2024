import React from "react";
import { Link } from "react-router-dom";

const Menubar = () => {
  return (
    <nav className="bg-blue-950 h-16 flex items-center">
      <div className="bg-blue-950 container mx-auto flex justify-between  font-medium">
        {/* Logo */}
        <div className="Logo text-white">
          <Link to={"/"}>BookBerry</Link>
        </div>
        {/* Left Nav */}
        <div className="text-white  space-x-12">
          <Link to={"/"}>Home</Link>
          <Link to={"/add-book"}>Add Book</Link>
          <Link to={"/books"}>Books</Link>
          {/* <Link to={"/book-update/:id"}>Update Book</Link> */}
        </div>

        {/* Right Nav */}
        <div className="text-white  space-x-8 ">
          {/* <a href="#">Login</a> */}
          <Link to={"/login"}>Login</Link>
          {/* <a href="#" className="border-l-2 pl-4">
            Signup
          </a> */}
          <Link to={"/"}>Signup</Link>
        </div>
      </div>
      {/* Container */}
    </nav>
  );
};

export default Menubar;
