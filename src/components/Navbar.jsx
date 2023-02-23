import { Link } from 'react-router-dom';
import styles from '../sass/Navbar.module.scss';

const Navbar = () => {
  const linkStyles = {
    color: '#e7e7e7',
    textDecoration: 'none',
    fontSize: '1.2rem',
  };
  return (
    <div className={styles.navbar_wrapper}>
      <nav className={styles.navbar}>
        <i className={styles.wizard_hat} />
        <ul className={styles.navbar_list}>
          <li>
            <Link style={linkStyles} to="/">Home</Link>
          </li>
          <li>
            <Link style={linkStyles} to="/calculator">Calculator</Link>
          </li>
          <li>
            <Link style={linkStyles} to="/quote">Quote</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
