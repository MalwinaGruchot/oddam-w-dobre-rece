import TextAndDecor from "../TextAndDecor";
import img from "../../assets/Home-Hero-Image.jpg";
import styles from "./Start.module.scss";
import Button from "../Button";

export default function Start() {
  return (
    <section
      className={styles.wrapper}
      style={{ backgroundImage: `url(${img})` }}
      id="start"
    >
      <div className={styles.container}>
        <div>
          <TextAndDecor
            text1={"Zacznij pomagać!"}
            text2={"Oddaj niechciane rzeczy w zaufane ręce"}
          />
          <div className={styles.btnWrapper}>
            <Button text={"ODDAJ RZECZY"} link={"/login"} size={"big"}></Button>
            <Button
              text={"ZORGANIZUJ ZBIÓRKĘ"}
              link={"/login"}
              size={"big"}
            ></Button>
          </div>
        </div>
      </div>
    </section>
  );
}
