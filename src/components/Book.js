import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import '../CSS/Book.css';
import { removeBook } from '../redux/books/books';

const Book = (props) => {
  const { title, author, id } = props;

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(removeBook(id));
  };

  return (
    <div className="Book-container">
      <div className="Book-specs">
        <div className="Book-information">
          <span className="Book-category">ACTION</span>
          <li className="Book-title">{title}</li>
          <li className="Book-author color">{author}</li>
          <div>
            <span className="Book-comments color">COMMENTS</span>
            <span className="Book-divider" />
            <button className="Book-remove color" type="button" onClick={handleClick}>
              REMOVE
            </button>
            <span className="Book-divider" />
            <span className="Book-edit color">EDIT</span>
          </div>
        </div>
        <div className="Book-progress">
          <div className="Book-percent">
            <div className="Book-percent-circle" />
          </div>
          <div className="Book-percent-number">
            <p className="percent">70%</p>
            <p className="percent-status">COMPLETED</p>
          </div>
          <div className="progress-divider" />
          <div className="chapter">
            <div>
              <p className="current-chapter">CURRENT CHAPTER</p>
              <p className="chapter-number">CHAPTER 10</p>
            </div>
            <div>
              <button type="button" className="update">UPDATE PROGRESS</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
export default Book;
