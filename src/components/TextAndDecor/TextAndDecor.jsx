import decor from "../../assets/Decoration.svg";
import styles from "./TextAndDecor.module.scss";

export default function TextAndDecor({ text1, text2 }) {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{text1}</h2>
      {text2 ? <h2 className={styles.title}>{text2}</h2> : null}
      <div className={styles.decor}>
        <img src={decor} />
      </div>
    </div>
  );
}
