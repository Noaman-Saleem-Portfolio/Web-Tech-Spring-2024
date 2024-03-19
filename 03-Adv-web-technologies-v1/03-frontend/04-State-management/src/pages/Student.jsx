import React from "react";

import "../styles/student.css";

import user from "../assets/images/user.png";
import starEmpty from "../assets/images/star-empty.png";
import starFilled from "../assets/images/star-filled.png";

const Student = () => {
  const [contact, setContact] = React.useState({
    firstName: "Noaman",
    lastName: "Saleem",
    phone: "+92 (333) 670-2681",
    email: "itsmyrealname@example.com",
    isFavorite: true,
  });

  let starIcon = contact.isFavorite ? starFilled : starEmpty;

  const setFavorite = () => {
    setContact((prev) => {
      return { ...prev, isFavorite: !prev.isFavorite };
    });
  };

  return (
    <main>
      <article className="card">
        <img src={user} className="card--image" />
        <div className="card--info">
          <img
            onClick={setFavorite}
            src={starIcon}
            className="card--favorite"
          />
          <h2 className="card--name">
            {contact.firstName} {contact.lastName}
          </h2>
          <p className="card--contact">{contact.phone}</p>
          <p className="card--contact">{contact.email}</p>
        </div>
      </article>
    </main>
  );
};

export default Student;
