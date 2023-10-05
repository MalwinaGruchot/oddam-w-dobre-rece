import styles from "./Column.module.scss";

export default function Column({ number = 10, title }) {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.number}>{number}</h2>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a
        elit viverra elementuma. Aliquam erat volutpat.
      </p>
    </div>
  );
}
