import "../styles/books.css";

const Books = ({ image, title, price }) => {
  return (
    <div className="card">
      <div className="book-image">
        <img src={image} alt="" />
      </div>
      <h4>{title}</h4>
      <p>Price : ${price}</p>
    </div>
  );
};

export default Books;
