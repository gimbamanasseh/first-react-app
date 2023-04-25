import React from "react";
import ReactDOM from "react-dom/client";
import "../src/assets/css/index.css";

const firstBook = {
  author: "Donald J Trump",
  title: "Letters to Trump",
  img: "./images/letter-to-trump.jpg",
};
const secondBook = {
  author: "James Clear",
  title: "Atomic Habits",
  img: "./images/atomic-habits.jpg",
};

function Booklist() {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}

const Book = (props) => {
  console.log(props);
  return (
    <article className="book">
      <img src={props.img} alt={props.title} />
      <h2>{props.title}</h2>
      <h4>{props.author}</h4>
    </article>
  );
};

// const Image = () => (
//   <img src="./images/letter-to-trump.jpg" alt="Letters to Trump" />
// );
// const Title = () => <h2>Letters to Trump</h2>;
// const Author = () => {
//   return <h4>Donald J Trump</h4>;
// };

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Booklist />);
