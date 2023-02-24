import Book from './Book';

const BookList = ({ booksProps }) => (
  <ul>
    {booksProps.map((book) => (
      <Book key={book.id} bookProp={book} />
    ))}
  </ul>
);

export default BookList;
