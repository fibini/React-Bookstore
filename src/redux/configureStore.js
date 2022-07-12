import { combineReducers, configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/books';
import statusReducer from './categories/categories';

const rootReducer = combineReducers({
  books: booksReducer,
  statuses: statusReducer,
});

const store = configureStore(rootReducer);

store.dispatch(booksReducer);
