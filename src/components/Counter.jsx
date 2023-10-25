import styles from './Counter.module.css';
import { IconAdd } from "./icons/IconAdd";
import { IconMinus } from "./icons/IconMinus";

export const Counter = ({ text = '', count, onIncrement, onDecrement }) => {
    return (
      <div className={styles.wrapper}>
        <p>{count} {text}</p>
        <nav>
          <IconAdd onClick={onIncrement} />
          <IconMinus onClick={onDecrement} />
        </nav>
      </div>
    );
};