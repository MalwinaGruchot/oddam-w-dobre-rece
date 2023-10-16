import styles from "./ButtonWhoWeHelp.module.scss";
import PropTypes from "prop-types";

export default function ButtonWhoWeHelp({
  children,
  id,
  curentId,
  setFilter,
  setPage,
}) {
  const handleClick = () => {
    setFilter(id);
    setPage(1);
  };

  return (
    <button
      className={styles.button}
      style={
        id === curentId ? { border: "1px solid #3C3C3C" } : { boder: "none" }
      }
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

ButtonWhoWeHelp.propTypes = {
  children: PropTypes.string,
  id: PropTypes.string,
  curentId: PropTypes.string,
  setFilter: PropTypes.func,
  setPage: PropTypes.number,
};
