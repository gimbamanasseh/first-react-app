import React from "react";
import ReactDOM from "react-dom/client";
import "../src/assets/css/index.css";
import { books } from "../src/assets/js/books";
import Book from "../src/assets/js/Book";
function Booklist() {
  return (
    <>
      <h2 className="app-title">Amazon Best Sellers Mockup ReactApp</h2>
      <section className="booklist">
        {books.map((book, index) => {
          return <Book {...book} key={book.id} number={index} />;
        })}
      </section>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Booklist />);
