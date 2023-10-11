import icon1 from "../../assets/Icon-1.svg";
import icon2 from "../../assets/Icon-2.svg";
import icon3 from "../../assets/Icon-3.svg";
import icon4 from "../../assets/Icon-4.svg";
import styles from "./Step.module.scss";
import PropTypes from "prop-types";
const arrayIcon = [icon1, icon2, icon3, icon4];

export default function Step({ icon, title, text }) {
  return (
    <div className={styles.wrapp}>
      <div className={styles.icon}>
        <img src={arrayIcon[icon]} />
      </div>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.text}>{text}</p>
    </div>
  );
}

Step.propTypes = {
  icon: PropTypes.number,
  title: PropTypes.string,
  text: PropTypes.string,
};
