"use client";
import { useEffect, useContext } from "react";
import { usePerfectState } from "@/shared/hooks/useStateCustomHook";
import { DataContext } from "@/libs/components/wrapper/wraper_context";

import styles from "./card.module.scss";
import List from "./libs/link";
import Basket from "../basket/basket";

export default function Card({ data }) {
  var [storedItems, setStoredItems] = usePerfectState([]);
  // CONTEXT BLYAT
  var { isData } = useContext(DataContext);

  useEffect(() => {
    var localeData = JSON.parse(localStorage.getItem("storedItems"));
    localeData && setStoredItems(localeData);
  }, []);

  return (
    <>
      <ul className={styles.container_cards}>
        <Basket setStoredItems={setStoredItems} storedItems={storedItems} />
        {data.map((item, id) => {
          if (isData) {
            return (
              item["attributes"].categories.includes(isData) && (
                <List
                  key={id}
                  setStoredItems={setStoredItems}
                  {...item["attributes"]}
                />
              )
            );
          } else {
            return (
              <List
                key={id}
                setStoredItems={setStoredItems}
                {...item["attributes"]}
              />
            );
          }
        })}
      </ul>
      <button
        className={styles.btn}
        style={{ background: "#000", color: "#fff", width: "200px" }}
      >
        Mehr laden
      </button>
    </>
  );
}
