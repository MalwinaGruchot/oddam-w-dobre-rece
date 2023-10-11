import Button from "../Button";
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
            <Button text={"Start"} size={"medium"} link={"start"}></Button>
          </li>
          <li>
            <Button
              text={"O co chodzi?"}
              size={"medium"}
              link={"simpleSteps"}
            ></Button>
          </li>
          <li>
            <Button text={"O nas"} size={"medium"} link={"aboutUs"}></Button>
          </li>
          <li>
            <Button
              text={"Fundacja i organizacje"}
              size={"medium"}
              link={"whowehelp"}
            ></Button>
          </li>
          <li>
            <Button text={"Kontakt"} size={"medium"} link={"contact"}></Button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
