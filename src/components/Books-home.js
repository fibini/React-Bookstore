import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBooksApi } from '../redux/books/books';
import Book from './Book';
import Form from './Form';

const Home = () => {
  const { books } = useSelector((state) => state.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooksApi());
  }, []);
  return (
    <div>
      <ul>
        {books.map((book) => (
          <Book
            key={book.id}
            id={book.id}
            title={book.title}
            author={book.author}
          />
        ))}
      </ul>
      <Form />
    </div>
  );
};
export default Home;
