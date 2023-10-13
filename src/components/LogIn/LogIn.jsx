import { Link } from "react-router-dom";
import TextAndDecor from "../TextAndDecor";
import styles from "./LogIn.module.scss";
import { useState } from "react";

export default function LogIn() {
  const [err, setErr] = useState({
    email: false,
    pass: false,
  });

  const handleSubmit = () => {};

  return (
    <form noValidate onSubmit={handleSubmit} className={styles.logIn}>
      <TextAndDecor text1={"Zaloguj się"}></TextAndDecor>
      <div className={styles.wrapper}>
        <label className={styles.label} htmlFor="email">
          Email
          <input className={styles.input} type="email" />
          {err.email ? (
            <p className={styles.error}>Podany email jest nieprawidłowy!</p>
          ) : null}
        </label>
        <label className={styles.label} htmlFor="password">
          Hasło
          <input className={styles.input} type="password" />
        </label>
      </div>
      <div>
        <Link to="/create-an-account" className={styles.button}>
          Załóż konto
        </Link>
        <button type="submit" className={styles.buttonLogIn}>
          Zaloguj się
        </button>
      </div>
    </form>
  );
}
