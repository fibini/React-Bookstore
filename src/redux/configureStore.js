import { configureStore } from '@reduxjs/toolkit';
import statusReducer from './categories/categories';
import booksAppReducer from './books/books';

const reducer = {
  statuses: statusReducer,
  books: booksAppReducer,
};

const store = configureStore({ reducer });
export default store;
