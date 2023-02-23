import React, { useState } from 'react';
import calculate from '../logic/calculate';
import styles from '../sass/Calculator.module.scss';

const Calculator = () => {
  const [obj, setObj] = useState({
    total: 0,
  });

  const onClickHandler = (e) => {
    const name = e.target;
    setObj(calculate(obj, name.innerText));
  };

  const { total, operation, next } = obj;

  return (
    <div className={styles.giant_wrapper}>
      <div className={styles.main_container} data-testid="main_container">
        <div className={styles.text_wrapper}>
          <h1>Math Magicians</h1>
          <p>Lets do some math!</p>
        </div>
        <div className={styles.grid_wrapper}>
          <div data-testid="total" className={styles.total} type="button">
            { total }
            { operation }
            { next }
          </div>
          <button className={styles.ac} type="button" onClick={onClickHandler}>AC</button>
          <button className={styles.plus_minus} type="button" onClick={onClickHandler}>+/-</button>
          <button className={styles.percent} type="button" onClick={onClickHandler}>%</button>
          <button className={styles.divide} type="button" onClick={onClickHandler}>÷</button>
          <button className={styles.seven} type="button" onClick={onClickHandler}>7</button>
          <button className={styles.eight} type="button" onClick={onClickHandler}>8</button>
          <button className={styles.nine} type="button" onClick={onClickHandler}>9</button>
          <button className={styles.multiply} type="button" onClick={onClickHandler}>x</button>
          <button className={styles.four} type="button" onClick={onClickHandler}>4</button>
          <button className={styles.five} type="button" onClick={onClickHandler}>5</button>
          <button className={styles.six} type="button" onClick={onClickHandler}>6</button>
          <button className={styles.minus} type="button" onClick={onClickHandler}>-</button>
          <button className={styles.one} type="button" onClick={onClickHandler}>1</button>
          <button className={styles.two} type="button" onClick={onClickHandler}>2</button>
          <button className={styles.three} type="button" onClick={onClickHandler}>3</button>
          <button className={styles.plus} type="button" onClick={onClickHandler}>+</button>
          <button className={styles.zero} type="button" onClick={onClickHandler}>0</button>
          <button className={styles.point} type="button" onClick={onClickHandler}>.</button>
          <button className={styles.equal} type="button" onClick={onClickHandler}>=</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
