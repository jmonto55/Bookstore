import { useDispatch } from 'react-redux';
import styles from '../sass/Categories.module.scss';
import { checkStatus } from '../redux/categories/categoriesSlice';

const Categories = () => {
  const dispatch = useDispatch();

  return (
    <div className={styles.btn_wrapper}>
      <button
        type="button"
        className={styles.check_btn}
        onClick={() => {
          dispatch(checkStatus());
        }}
      >
        Check Status
      </button>
    </div>
  );
};

export default Categories;
