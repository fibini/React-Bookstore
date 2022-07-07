import React from "react";

const Book = (props) => {
  const {title, author} = props
  return (
    <>
      <li>{title}</li>
      <li>{author}</li>
      <button>REMOVE</button>
    </>
  );
};
export default Book;
