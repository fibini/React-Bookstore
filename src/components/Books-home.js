import React from "react";
import Book from "./Book";
import Form from "./Form";

const books = [{
  title:"Fifty Shades of Blue",
  author:"Fabien",
  id: 1
}];

const Home = (props) => (
  <div>
    <ul>
      {books.map((book) => (
        <Book key={book.id} title={book.title} author={book.author} />
      ))}
    </ul>
    <Form />
  </div>
);
export default Home;
