import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { postBook } from '../redux/books/booksSlice';
import styles from '../sass/FormAddBook.module.scss';

const FormAddBook = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    title: '', author: '', item_id: '', category: 'Drama',
  });

  const handleChangeTitle = (e) => {
    setData({
      ...data,
      title: e.target.value,
      item_id: uuidv4(),
    });
  };

  const handleChangeAuthor = (e) => {
    setData({
      ...data,
      author: e.target.value,
      item_id: uuidv4(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postBook(data));
    setData({ title: '', author: '', item_id: '' });
  };

  return (
    <div className={styles.form_container}>
      <div className={styles.line} />
      <h1 className={styles.form_title}>ADD NEW BOOK</h1>
      <form
        className={styles.form_wrapper}
        onSubmit={handleSubmit}
      >
        <input
          className={styles.form_tit}
          type="text"
          placeholder="Book title"
          value={data.title}
          onChange={handleChangeTitle}
        />
        <input
          className={styles.form_author}
          type="text"
          placeholder="Book author"
          value={data.author}
          onChange={handleChangeAuthor}
        />
        <button className={styles.form_button} type="submit">ADD BOOK</button>
      </form>
    </div>
  );
};

export default FormAddBook;
