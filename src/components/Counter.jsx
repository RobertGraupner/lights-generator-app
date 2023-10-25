import styles from './Counter.module.css';
import { IconAdd } from "./icons/IconAdd";
import { IconMinus } from "./icons/IconMinus";
import { useState } from 'react';

export const Counter = ({ text = '', count = 0}) => {
  const [value, setValue] = useState(count);

  const increaseCount = () => {
    setValue(prevCount => prevCount + 1);
  };

  const decreaseCount = () => {
    setValue(prevCount => prevCount > 0 ? prevCount - 1 : 0);
  };

    return (
      <div className={styles.wrapper}>
        <p>{value} {text}</p>
        <nav>
          <IconAdd onClick={increaseCount} />
          <IconMinus onClick={decreaseCount} />
        </nav>
      </div>
    );
};