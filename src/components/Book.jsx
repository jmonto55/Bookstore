import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';
import styles from '../sass/Book.module.scss';

const Book = ({ bookProp }) => {
  const userStyles = {
    padding: '4px 15px',
    border: 'none',
    borderRight: 'solid 2px #e8e8e',
    backgroundColor: '#fafafa',
  };
  const dispatch = useDispatch();
  return (
    <div className={styles.book_main_cont}>
      <div className={styles.main_info_cont}>
        <p className={styles.category}>{bookProp.category}</p>
        <h1 className={styles.title}>{bookProp.title}</h1>
        <p className={styles.author}>{bookProp.author}</p>
        <ul className={styles.user_interactions}>
          <li style={{ padding: '4px 15px 4px 0', borderRight: 'solid 2px #e8e8e8' }} className={styles.author}>Comments</li>
          <button
            type="button"
            style={userStyles}
            className={styles.author}
            onClick={() => {
              dispatch(removeBook(bookProp.id));
            }}
          >
            Remove
          </button>
          <li style={{ padding: '4px 15px' }} className={styles.author}>Edit</li>
        </ul>
      </div>
      <div className={styles.progress_cont}>
        <div className={styles.progress_circle} />
        <div className={styles.progress_info}>
          <h2 className={styles.progress}>{bookProp.progress}</h2>
          <p className={styles.completed}>completed</p>
        </div>
      </div>
      <div className={styles.chapter_cont}>
        <p>CURRENT CHAPTER</p>
        <p style={{ opacity: '1' }}>{bookProp.current}</p>
        <button type="button">UPDATE PROGRESS</button>
      </div>
    </div>
  );
};

export default Book;
