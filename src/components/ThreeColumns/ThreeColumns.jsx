import Column from "../Column";
import styles from "./ThreeColumns.module.scss";

export default function ThreeColumns() {
  return (
    <section className={styles.threeColumns}>
      <div className={styles.container}>
        <Column number={10} title={"ODDANYCH WORKÓW"}></Column>
        <Column number={5} title={"WSPARTYCH ORGANIZACJI"}></Column>
        <Column number={7} title={"ZORGANIZOWANY ZBIÓREK"}></Column>
      </div>
    </section>
  );
}
