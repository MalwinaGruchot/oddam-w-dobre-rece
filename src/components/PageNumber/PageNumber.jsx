import styles from "./PageNumber.module.scss";

export default function PageNumber({ children = 1, curentPage, setPage }) {
  const handleClick = () => {
    setPage(children);
  };

  return (
    <h2
      className={styles.pageNumber}
      style={
        curentPage === children
          ? { border: "1px solid #707070" }
          : { border: "none" }
      }
      onClick={handleClick}
    >
      {children}
    </h2>
  );
}
