import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const Form = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(
      addBook({
        title,
        author,
        id: Math.random(),
      }),
    );
  };

  return (
    <div>
      <h2>ADD NEW BOOK</h2>
      <form>
        <input
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Book title"
        />
        <input
          name="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Author"
        />
        <button type="submit" onClick={handleClick}>
          ADD BOOK
        </button>
      </form>
    </div>
  );
};

export default Form;
