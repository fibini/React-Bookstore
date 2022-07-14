import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = { books: [], status: null };
const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const GET_BOOKS = 'bookstore/books/GET_BOOKS';
const API_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/j5zVHdOsweGs1rN18eHv/books';

// export const booksReducer = (state = [], action) => {
//   switch (action.type) {
//     case GET_BOOKS:
//       return [...state, action.id];

//     case ADD_BOOK:
//       return [...state, action.id];

//     case REMOVE_BOOK:
//       return [...state.filter((book) => book.id !== action.id)];

//     default:
//       return state;
//   }
// };
const bookList = (obj) => {
  const result = [];
  const keys = Object.keys(obj);

  keys.forEach((item) => {
    result.push({
      id: item,
      title: obj[item][0].title,
      author: obj[item][0].author,
      category: obj[item][0].category,
    });
  });
  return result;
};

export const getBooksApi = createAsyncThunk(GET_BOOKS, async () => {
  const result = await fetch(API_URL, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const data = await result.json();
  return bookList(data);
});

export const addBook = createAsyncThunk(ADD_BOOK, async (payload, thunk) => (
  fetch(API_URL, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then(() => {
    thunk.dispatch(getBooksApi());
  })
));

export const removeBook = createAsyncThunk(REMOVE_BOOK, async (id, thunk) => (
  fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
    body: JSON.stringify({
      item_id: id,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then(() => {
    thunk.dispatch(getBooksApi());
  })
));

const booksApp = createSlice({
  name: 'books',
  initialState,
  extraReducers: {
    [getBooksApi.pending]: (state) => ({
      ...state,
      status: 'loading',
    }),
    [getBooksApi.fulfilled]: (state, action) => ({
      ...state,
      books: action.payload,
    }),
  },
});

export default booksApp.reducer;
