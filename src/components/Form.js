import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import '../CSS/Form.css';
import newBook from '../redux/books/newbook';
import { addBook } from '../redux/books/books';

const Form = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(addBook(newBook(title, author)));

    setTitle('');
    setAuthor('');
  };

  return (
    <div className="Form-container">
      <h2 className="Form-header">ADD NEW BOOK</h2>
      <form className="Form">
        <input
          className="Form-title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Book title"
        />
        <input
          className="Form-author"
          name="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Author"
        />
        <button className="Form-submit" type="submit" onClick={handleClick}>
          ADD BOOK
        </button>
      </form>
    </div>
  );
};

export default Form;
