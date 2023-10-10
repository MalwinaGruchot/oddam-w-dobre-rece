import styles from "./Contact.module.scss";
import img from "../../assets/Background-Contact-Form.jpg";
import TextAndDecor from "../TextAndDecor";

export default function Contact() {
  return (
    <section className={styles.contact}>
      <div
        className={styles.img}
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <TextAndDecor text1={"Skontaktuj się z nami"} />
          <form noValidate className={styles.form}>
            <div className={styles.wrapperForm}>
              <label className={styles.label} htmlFor="name">
                Wpisz swoje imię
                <input
                  className={styles.input}
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Krzysztof"
                />
              </label>

              <label className={styles.label} htmlFor="email">
                Wpisz swój email
                <input
                  className={styles.input}
                  type="email"
                  name="email"
                  id="email"
                  placeholder="abc@xyz.pl"
                />
              </label>
            </div>
            <label className={styles.labelText} htmlFor="message">
              Wpisz swoją wiadomość
              <textarea
                className={styles.input}
                name="message"
                id="message"
                cols="10"
                rows="3"
                maxLength={120}
                placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
              ></textarea>
            </label>

            <button className={styles.btn} type="submit">
              Wyślij
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
