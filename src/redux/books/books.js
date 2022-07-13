const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const defaultState = [
  {
    title: 'Meeowww',
    author: 'World',
    id: 0,
  },
  {
    title: 'Fifty Shades of Blue',
    author: 'Fabien',
    id: 1,
  },
  {
    title: 'Radiohead',
    author: 'Daf',
    id: 2,
  },
];
const booksReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.id];

    case REMOVE_BOOK:
      return [...state.filter((book) => book.id !== action.id)];

    default:
      return state;
  }
};

export default booksReducer;

export const addBook = (id) => ({
  type: ADD_BOOK,
  id,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});
