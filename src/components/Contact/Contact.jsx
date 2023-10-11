import styles from "./Contact.module.scss";
import img from "../../assets/Background-Contact-Form.jpg";
import TextAndDecor from "../TextAndDecor";
import Form from "../Form/Form";
import facebookicon from "../../assets/Facebook.svg";
import instagramicon from "../../assets/Instagram.svg";

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
          <Form />
        </div>
      </div>
      <footer className={styles.footer}>
        <h2 className={styles.footertitle}>Copyright by Coders Lab</h2>
        <img className={styles.footericon} src={facebookicon} alt="facebook" />
        <img
          className={styles.footericon}
          src={instagramicon}
          alt="instagram"
        />
      </footer>
    </section>
  );
}
