import TextAndDecor from "../TextAndDecor";
import ButtonWhoWeHelp from "../ButtonWhoWeHelp";
import styles from "./WhoWeHelp.module.scss";
import { useEffect, useState } from "react";
import data from "../../data/data";
import WhoWeHelpItem from "../WhoWeHelpItem";
import PageNumber from "../PageNumber";

export default function WhoWeHelp() {
  const [filter, setFilter] = useState("fundacja");
  const [page, setPage] = useState(1);

  const filteredData = data.find((el) => el.id === filter);

  const pagesNumber = () => {
    const array = [];
    for (let i = 0; i < Math.ceil(filteredData.items.length / 3); i++) {
      array.push(i + 1);
    }
    return array;
  };

  return (
    <section className={styles.whoWeHelp}>
      <div className={styles.container}>
        <TextAndDecor text1={"Komu pomagamy"}></TextAndDecor>
        <div className={styles.wrapper}>
          <ButtonWhoWeHelp
            curentId={filter}
            id={"fundacja"}
            setFilter={setFilter}
          >
            Fundacjom
          </ButtonWhoWeHelp>
          <ButtonWhoWeHelp
            curentId={filter}
            id={"organizacja"}
            setFilter={setFilter}
          >
            Organizacjom pozarządowym
          </ButtonWhoWeHelp>
          <ButtonWhoWeHelp
            curentId={filter}
            id={"zbiorka"}
            setFilter={setFilter}
          >
            Lokalnym zbiórkom
          </ButtonWhoWeHelp>
        </div>
        <p className={styles.text}>{filteredData.description}</p>
        <div style={{ width: "100%" }}>
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
        <div className={styles.wrapperNumber}>
          {pagesNumber().map((el) => (
            <PageNumber key={el} curentPage={page} setPage={setPage}>
              {el}
            </PageNumber>
          ))}
        </div>
      </div>
    </section>
  );
}
