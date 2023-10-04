import TextAndDecor from "./TextAndDecor";
import styles from "./SimpleSteps.module.scss";
import Button from "./Button";
import Step from "./Step";

export default function SimpleSteps() {
  return (
    <section className={styles.simpleSteps}>
      <TextAndDecor text1={"Wystarczą 4 proste kroki"}></TextAndDecor>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Step
            icon={0}
            title={"Spakuj je"}
            text={"ubrania, zabawki, sprzęt i inne"}
          />
          <Step
            icon={1}
            title={"Wybierz rzeczy"}
            text={"skorzystaj z worków na śmieci"}
          />
          <Step
            icon={2}
            title={"Zdecyduj komu chcesz pomóc"}
            text={"wybierz zaufane miejsce"}
          />
          <Step
            icon={3}
            title={"Zamów kuriera"}
            text={"kurier przyjedzie w dogodnym terminie"}
          />
        </div>
      </div>
      <div className={styles.wrapp}>
        <Button text={`ODDAJ RZECZY`} link={"/login"} size={"big"}></Button>
      </div>
    </section>
  );
}
