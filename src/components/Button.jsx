import { Link } from "react-router-dom";
import styles from "./Button.module.scss";

export default function Button({ text = "text", size = "small", link = "/" }) {
  if (size === "small")
    return (
      <Link to={link} className={styles.small}>
        {text}
      </Link>
    );
  if (size === "medium")
    return (
      <Link to={link} className={styles.medium}>
        {text}
      </Link>
    );
  if (size === "big")
    return (
      <Link to={link} className={styles.big}>
        {text}
      </Link>
    );
}
