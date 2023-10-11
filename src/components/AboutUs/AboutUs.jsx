import people from "../../assets/People.jpg";
import TextAndDecor from "../TextAndDecor";
import styles from "./AboutUs.module.scss";
import signature from "../../assets/Signature.svg";

export default function AboutUs() {
  return (
    <section
      id="aboutUs"
      className={styles.aboutUs}
      style={{ backgroundImage: `url(${people})` }}
    >
      <div className={styles.container}>
        <div className={styles.column}>
          <TextAndDecor text1={"O nas"}></TextAndDecor>
          <p className={styles.text}>
            Nori grape silver beet broccoli kombu beet greens fava bean potato
            quandong celery. Bunya nuts black-eyed pea prairie turnip leek
            lentil turnip greens parsnip.
          </p>
          <img className={styles.img} src={signature} alt="" />
        </div>
      </div>
    </section>
  );
}
