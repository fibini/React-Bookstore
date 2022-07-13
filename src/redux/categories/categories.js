const CHECKED_STATUS = 'bookstore/categories/CHECKED_STATUS';

const statusReducer = (state = [], action) => {
  if (action.type === CHECKED_STATUS) {
    return [...state, action.text];
  }
  return state;
};

export default statusReducer;

export const status = () => ({
  type: CHECKED_STATUS,
  text: 'Under construction',
});
