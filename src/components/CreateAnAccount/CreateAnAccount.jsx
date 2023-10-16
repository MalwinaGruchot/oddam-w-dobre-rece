import { Link } from "react-router-dom";
import TextAndDecor from "../TextAndDecor";
import styles from "./CreateAnAccount.module.scss";
import { useState } from "react";
import { validateEmail, validatePass } from "../../validate/validate";

export default function CreateAnAccound() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [err, setErr] = useState({
    email: false,
    pass: false,
  });

  const validate = () => {
    let error = {
      email: !validateEmail(email),
      pass: !validatePass(pass),
    };
    setErr(error);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validate();
  };
  return (
    <form noValidate onSubmit={handleSubmit} className={styles.logIn}>
      <TextAndDecor text1={"Zaloguj się"}></TextAndDecor>
      <div className={styles.wrapper}>
        <label className={styles.label} htmlFor="email">
          Email
          <input
            className={styles.input}
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {err.email ? (
            <p className={styles.error}>Podany email jest nieprawidłowy!</p>
          ) : null}
        </label>
        <label className={styles.label} htmlFor="password">
          Hasło
          <input
            className={styles.input}
            id="password"
            name="password"
            type="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
          {err.pass ? (
            <p className={styles.error}>Podane hasło jest za krótkie!</p>
          ) : null}
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
