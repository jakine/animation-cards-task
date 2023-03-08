import styles from "../style/Components.module.css";
import ArrowIcon from "../assets/arrow.js";

const Card = (props) => {
  return (
    <div className={`${styles.cardDiv} ${styles[props.cardstyles]}`}>
      <div className={styles.cardIconDiv}>{props.icon}</div>
      <h3 className={styles.cartTitle}>{props.title}</h3>
      <p className={styles.cardP}>{props.text}</p>
      <ArrowIcon className={styles.arrowIcon} />
    </div>
  );
};

export default Card;
