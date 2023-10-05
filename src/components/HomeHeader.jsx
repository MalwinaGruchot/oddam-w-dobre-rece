import Button from "./Button";
import styles from "./HomeHeader.module.scss";
export default function HomeHeader() {
  return (
    <header className={styles.menu}>
      <nav className={styles.navigation}>
        <ul className={styles.container}>
          <li>
            <Button text={"Zaloguj"} link={"/login"}></Button>
          </li>
          <li>
            <Button
              text={"Załóż konto"}
              link={"/create-an-account"}
              border={1}
            ></Button>
          </li>
        </ul>
        <ul className={styles.containerBottom}>
          <li>
            <Button text={"Start"} size={"medium"}></Button>
          </li>
          <li>
            <Button text={"O co chodzi?"} size={"medium"}></Button>
          </li>
          <li>
            <Button text={"O nas"} size={"medium"}></Button>
          </li>
          <li>
            <Button text={"Fundacja i organizacje"} size={"medium"}></Button>
          </li>
          <li>
            <Button text={"Kontakt"} size={"medium"}></Button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
