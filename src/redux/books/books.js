const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const booksReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.id];

    case REMOVE_BOOK:
      return state.filter((book) => (book.id !== action.id));

    default:
      return state;
  }
};

export default booksReducer;

export const addBook = (book) => ({
  type: ADD_BOOK,
  id: book.id,
});

export const removeBook = (book) => ({
  type: REMOVE_BOOK,
  id: book.id,
});
