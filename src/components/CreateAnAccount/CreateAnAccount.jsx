import styles from "./CreateAnAccount.module.scss";
import TextAndDecor from "../TextAndDecor";
import { Link } from "react-router-dom";

export default function CreateAnAccount() {
  return (
    <section className={styles.createAccount}>
      <TextAndDecor text1={"Zaloguj się"}></TextAndDecor>
      <div className={styles.wrapper}>
        <label className={styles.label} htmlFor="email">
          Email
          <input className={styles.input} type="email" />
        </label>
        <label className={styles.label} htmlFor="password">
          Hasło
          <input className={styles.input} type="password" />
        </label>
        <label className={styles.label} htmlFor="password">
          Powtórz hasło
          <input className={styles.input} type="password" />
        </label>
      </div>
      <div>
        <Link to="/create-an-account" className={styles.button}>
          Załóż konto
        </Link>
        <button className={styles.buttonLogIn}>Zaloguj się</button>
      </div>
    </section>
  );
}
