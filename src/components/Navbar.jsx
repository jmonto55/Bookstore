import { Link } from 'react-router-dom';
import styles from '../sass/Navbar.module.scss';

const Navbar = () => {
  const linkStyles = {
    color: '#e7e7e7',
    textDecoration: 'none',
    fontSize: '1',
  };
  return (
    <div className={styles.navbar_wrapper}>
      <nav className={styles.navbar}>
        <ul className={styles.navbar_list}>
          <li>
            <h1 className={styles.navbar_brand}>Bookstore CMS</h1>
          </li>
          <li>
            <Link style={linkStyles} to="/">Books</Link>
          </li>
          <li>
            <Link style={linkStyles} to="/categories">Categories</Link>
          </li>
        </ul>
        <div className="user_wrapper">
          <span className="user material-symbols-outlined">person</span>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
