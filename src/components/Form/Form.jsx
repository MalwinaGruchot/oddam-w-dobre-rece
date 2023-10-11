import { useState } from "react";
import styles from "./Form.module.scss";
import sendMessage from "../../api/sendMessage";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [err, setErr] = useState({
    name: false,
    email: false,
    message: false,
  });

  const validate = () => {
    setErr({
      name: false,
      email: false,
      message: false,
    });

    let error = {
      name: false,
      email: false,
      message: false,
    };
    if (name === "" || name.includes(" ")) {
      error = { ...error, name: true };
    }

    if (
      !String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    ) {
      error = { ...error, email: true };
    }

    if (message === "" || message.length < 120) {
      error = { ...error, message: true };
    }
    console.log(error);
    setErr(error);

    if (error.name || error.message) {
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      sendMessage({ name, email, message }, setStatus).catch((err) =>
        console.log(err)
      );

      setTimeout(() => {
        setStatus("");
      }, 3000);
    }
  };

  return (
    <form noValidate className={styles.form} onSubmit={handleSubmit}>
      {status === 200 ? (
        <div className={styles.successSend}>
          <p>Wiadomość została wysłana!</p>
          <p>Wkrótce się skontaktujemy.</p>
        </div>
      ) : null}
      <div className={styles.wrapperForm}>
        <label className={styles.label} htmlFor="name">
          Wpisz swoje imię
          <input
            className={styles.input}
            type="text"
            name="name"
            id="name"
            placeholder="Krzysztof"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {err.name ? (
            <p className={styles.error}>Podane imię jest nieprawidłowe!</p>
          ) : null}
        </label>

        <label className={styles.label} htmlFor="email">
          Wpisz swój email
          <input
            className={styles.input}
            type="email"
            name="email"
            id="email"
            placeholder="abc@xyz.pl"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {err.email ? (
            <p className={styles.error}>Podany email jest nieprawidłowy!</p>
          ) : null}
        </label>
      </div>
      <label className={styles.labelText} htmlFor="message">
        Wpisz swoją wiadomość
        <textarea
          className={styles.input}
          name="message"
          id="message"
          cols="10"
          rows="5"
          minLength={120}
          placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        {err.message ? (
          <p className={styles.error}>
            Wiadomość musi mieć co najmniej 120 znaków!
          </p>
        ) : null}
      </label>

      <button className={styles.btn} type="submit">
        Wyślij
      </button>
    </form>
  );
}
