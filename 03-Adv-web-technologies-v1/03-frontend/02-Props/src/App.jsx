import Books from "./components/Books";
import "./styles/app.css";

import booksData from "./booksData";

const App = () => {
  return (
    <div className="books-container">
      {booksData.map((book, index) => {
        return (
          <Books image={book.image} title={book.title} price={book.price} />
        );
      })}
      {/* <Books
        image="https://images-na.ssl-images-amazon.com/images/I/A1FW1G46+aL._AC_UL210_SR195,210_.jpg"
        title="Title 1"
        price={250}
      />
      <Books
        image="https://images-na.ssl-images-amazon.com/images/I/81yfsIOijJL._AC_UL127_SR127,127_.jpg"
        title="Title 2"
        price={150}
      /> */}
    </div>
  );
};

export default App;
