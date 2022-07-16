import React from 'react';
import { useDispatch } from 'react-redux';
import '../CSS/Categories.css';
import { status } from '../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(status);
  };

  return (
    <div>
      <button className="categories" type="button" onClick={handleClick}>Check status</button>
      <p className="categories-status">UNDER CONSTRUCTION</p>
    </div>
  );
};

export default Categories;
