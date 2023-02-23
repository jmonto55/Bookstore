import styles from '../sass/Home.module.scss';

const Home = () => (
  <div className={styles.home_wrapper} data-testid="home">
    <h1>Math Magicians</h1>
    <h2>Welcome to our page!</h2>
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has be
      the industrys standard dummy text ever since the 1500s, when an unknown printer took a galle
      of type and scrambled it to make a type specimen book. It has survived not only five centur,
      but also the leap into electronic typesetting, remaining essentially unchanged
    </p>
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has be
      the industrys standard dummy text ever since the 1500s, when an unknown printer took a galle
      of type and scrambled it to make a type specimen book. It has survived not only five centur,
      but also the leap into electronic typesetting, remaining essentially unchanged
    </p>
  </div>
);

export default Home;
