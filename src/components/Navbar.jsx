import { Link } from 'react-router-dom';
import styles from '../sass/Navbar.module.scss';

const Navbar = () => {
  const linkStyles = {
    color: '#121212',
    textDecoration: 'none',
    fontSize: '0.813rem',
    fontFamily: 'Montserrat',
  };
  const userStyles = {
    color: '#0290ff',
    fontSize: '2rem',
    margin: 'auto',
  };
  return (
    <div className={styles.navbar_wrapper}>
      <nav className={styles.navbar}>
        <ul className={styles.navbar_list}>
          <li>
            <h1 className={styles.navbar_brand}>Bookstore CMS</h1>
          </li>
          <li>
            <Link style={linkStyles} to="/">BOOKS</Link>
          </li>
          <li>
            <Link style={linkStyles} to="/categories">CATEGORIES</Link>
          </li>
        </ul>
        <div className={styles.user_wrapper}>
          <span style={userStyles} className="material-symbols-outlined">person</span>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
