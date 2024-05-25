import React from "react";
import { Link } from "react-router-dom";

const Cancel = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold">Payment Error Page</h1>
      <p>Something went wrong. Try again later.</p>
      <Link to={"/books"}>Go to Shopping page</Link>
    </div>
  );
};

export default Cancel;
