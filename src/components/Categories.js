import React from 'react';
import { useDispatch } from 'react-redux';
import { status } from '../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(status);
  };

  return (
    <div>
      <button type="button" onClick={handleClick}>Check status</button>
    </div>
  );
};

export default Categories;
