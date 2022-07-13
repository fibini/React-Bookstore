import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import Form from './Form';

const Home = () => {
  const books = useSelector((state) => state.books);
  return (
    <div>
      <ul>
        {books.map((book) => (
          <Book key={book.id} id={book.id} title={book.title} author={book.author} />
        ))}
      </ul>
      <Form />
    </div>
  );
};
export default Home;
