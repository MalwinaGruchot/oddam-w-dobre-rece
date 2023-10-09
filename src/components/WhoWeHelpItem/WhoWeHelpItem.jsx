import styles from "./WhoWeHelpItem.module.scss";

export default function WhoWeHelpItem({ name, items, decription }) {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{name}</h2>
      <p className={styles.text}>{items.join(", ")}</p>
      <h4 className={styles.subtitle}>{decription}</h4>
    </div>
  );
}
