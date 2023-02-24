import Book from './Book';
import styles from '../sass/BookList.module.scss';

const BookList = ({ booksProps }) => (
  <ul className={styles.list_cont}>
    {booksProps.map((book) => (
      <Book key={book.id} bookProp={book} />
    ))}
  </ul>
);

export default BookList;
