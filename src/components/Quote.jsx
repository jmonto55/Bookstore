import styles from '../sass/Quote.module.scss';

const Quote = () => (
  <div className={styles.quote_wrapper} data-testid="quote">
    <h1>Math Magicians</h1>
    <h2>
      Mathematics is not about numbers, equations, computations
      , or algorithms: is about understanding. -- William Paul Thurson
    </h2>
  </div>
);

export default Quote;
