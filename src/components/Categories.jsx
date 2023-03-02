import { useDispatch, useSelector } from 'react-redux';
import styles from '../sass/Categories.module.scss';
import { checkStatus } from '../redux/categories/categoriesSlice';

const Categories = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((store) => store.categories);

  return (
    <div className={styles.btn_wrapper}>
      <button
        type="button"
        className={styles.check_btn}
        onClick={() => {
          dispatch(checkStatus());
        }}
      >
        {categories}
      </button>
    </div>
  );
};

export default Categories;
