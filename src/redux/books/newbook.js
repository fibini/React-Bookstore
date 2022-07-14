import { v4 as uuidv4 } from 'uuid';

const newBook = (title, author) => ({
  item_id: uuidv4(),
  title,
  author,
  category: 'Not Shown',
});

export default newBook;
