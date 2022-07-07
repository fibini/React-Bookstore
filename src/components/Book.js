import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  const { title, author } = props;
  return (
    <>
      <li>{title}</li>
      <li>{author}</li>
      <button type="button">REMOVE</button>
    </>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,

};
export default Book;
