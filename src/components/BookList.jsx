import { useSelector } from 'react-redux';
import Book from './Book';
import styles from '../sass/BookList.module.scss';

const BookList = () => {
  const objectToArray = (obj) => {
    const keys = Object.keys(obj);
    const result = [];
    keys.forEach((key) => {
      obj[key].forEach((item) => {
        const newItem = {
          id: key,
          ...item,
        };
        result.push(newItem);
      });
    });
    return result;
  };
  let { booksList } = useSelector((store) => store.books);
  booksList = objectToArray(booksList);
  return (
    <ul className={styles.list_cont}>
      {booksList.map((book) => (
        <Book key={book.id} bookProp={book} />
      ))}
    </ul>
  );
};

export default BookList;
