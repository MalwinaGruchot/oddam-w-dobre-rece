import { Link, useNavigate } from "react-router-dom";
import styles from "./Button.module.scss";
import { scroller } from "react-scroll";
import PropTypes from "prop-types";

export default function Button({
  text = "text",
  size = "small",
  link = "/",
  border = 0,
}) {
  const navigate = useNavigate();
  const goToHomeAndScroll = async (link) => {
    await navigate("/");
    await scroller.scrollTo(link, {
      duration: 1500,
      smooth: true,
    });
  };

  if (size === "small")
    return (
      <Link
        style={border ? { border: "1px solid #fad648" } : { border: "none" }}
        to={link}
        className={styles.small}
      >
        {text}
      </Link>
    );
  if (size === "medium")
    return (
      <a
        href={`/#${link}`}
        className={styles.medium}
        onClick={() => goToHomeAndScroll(link)}
      >
        {text}
      </a>
    );
  if (size === "big")
    return (
      <Link to={link} className={styles.big}>
        {text}
      </Link>
    );
}

Button.propTypes = {
  text: PropTypes.string,
  size: PropTypes.string,
  link: PropTypes.string,
  border: PropTypes.number,
};
