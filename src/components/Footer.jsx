import styles from '../sass/Footer.module.scss';

const Footer = () => (
  <footer className={styles.footer} data-testid="footer">
    <p>© 2023 Jose Montoya. All rights reserved.</p>
    <p>Built with 💙 in Medellin, CO</p>
  </footer>
);

export default Footer;
