import TextAndDecor from "../TextAndDecor";
import ButtonWhoWeHelp from "../ButtonWhoWeHelp";
import styles from "./WhoWeHelp.module.scss";
import { useEffect, useState } from "react";
import data from "../../data/data";
import WhoWeHelpItem from "../WhoWeHelpItem";

export default function WhoWeHelp() {
  const [filter, setFilter] = useState("fundacja");
  const [page, setPage] = useState(1);

  const filteredData = data.find((el) => el.id === filter);

  return (
    <section className={styles.whoWeHelp}>
      <div className={styles.container}>
        <TextAndDecor text1={"Komu pomagamy"}></TextAndDecor>
        <div className={styles.wrapper}>
          <ButtonWhoWeHelp text={"Fundacjom"}></ButtonWhoWeHelp>
          <ButtonWhoWeHelp text={"Organizacjom pozarządowym"}></ButtonWhoWeHelp>
          <ButtonWhoWeHelp text={"Lokalnym zbiórkom"}></ButtonWhoWeHelp>
        </div>
        <p className={styles.text}>{filteredData.description}</p>

        {filteredData.items.slice(page * 3 - 3, page * 3).map((el) => {
          return (
            <WhoWeHelpItem
              key={el.id}
              name={el.name}
              items={el.items}
              decription={el.decription}
            />
          );
        })}
      </div>
    </section>
  );
}
