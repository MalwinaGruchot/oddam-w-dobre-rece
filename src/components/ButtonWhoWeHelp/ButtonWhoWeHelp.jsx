import styles from "./ButtonWhoWeHelp.module.scss";

export default function ButtonWhoWeHelp({ text = "text" }) {
  return <button className={styles.button}>{text}</button>;
}
