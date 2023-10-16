import { Link } from "react-router-dom";
import TextAndDecor from "../TextAndDecor";
import styles from "./CreateAnAccount.module.scss";
import { useState } from "react";
import {
  validateEmail,
  validatePass,
  validatePass2,
} from "../../validate/validate";

export default function CreateAnAccound() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [pass2, setPass2] = useState("");
  const [err, setErr] = useState({
    email: false,
    pass: false,
    pass2: false,
  });

  const validate = () => {
    let error = {
      email: !validateEmail(email),
      pass: !validatePass(pass),
      pass2: !validatePass2(pass, pass2),
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
        <label className={styles.label} htmlFor="password2">
          Powtórz hasło
          <input
            className={styles.input}
            id="password2"
            name="password2"
            type="password2"
            value={pass2}
            onChange={(e) => setPass2(e.target.value)}
          />
          {err.pass2 ? (
            <p className={styles.error}>Podane hasła są różne!</p>
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
