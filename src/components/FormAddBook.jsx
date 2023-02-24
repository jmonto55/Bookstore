import styles from '../sass/FormAddBook.module.scss';

const FormAddBook = () => (
  <div className={styles.form_container}>
    <div className={styles.line} />
    <h1 className={styles.form_title}>ADD NEW BOOK</h1>
    <form className={styles.form_wrapper} action="">
      <input className={styles.form_tit} type="text" placeholder="Book title" />
      <input className={styles.form_author} type="text" placeholder="Book author" />
      <button className={styles.form_button} type="submit">ADD BOOK</button>
    </form>
  </div>
);

export default FormAddBook;
