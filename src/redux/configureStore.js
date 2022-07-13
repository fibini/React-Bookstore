import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/books';
import statusReducer from './categories/categories';

const reducer = {
  books: booksReducer,
  statuses: statusReducer,
};

const store = configureStore({ reducer });
export default store;

store.dispatch(booksReducer);
