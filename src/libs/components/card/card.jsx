"use client";
import { useEffect, useContext, useState } from "react";
import { usePerfectState } from "@/shared/hooks/useStateCustomHook";
import { DataContext } from "@/libs/components/wrapper/wraper_context";

import styles from "./card.module.scss";
import List from "./libs/link";
import Basket from "../basket/basket";

const ITEMS_PER_PAGE = 10;

export default function Card({ data }) {
  const [storedItems, setStoredItems] = usePerfectState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const { isData } = useContext(DataContext);

  useEffect(() => {
    const localeData = JSON.parse(localStorage.getItem("storedItems"));
    if (localeData) {
      setStoredItems(localeData);
    }
  }, []);

  const handleLoadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const filteredData = isData
    ? data.filter((item) => item["attributes"].categories.includes(isData))
    : data;

  const paginatedData = filteredData.slice(0, currentPage * ITEMS_PER_PAGE);

  return (
    <>
      <ul className={styles.container_cards}>
        <Basket setStoredItems={setStoredItems} storedItems={storedItems} />
        {paginatedData.map((item, id) => (
          <List
            key={id}
            setStoredItems={setStoredItems}
            {...item["attributes"]}
          />
        ))}
      </ul>
      {currentPage * ITEMS_PER_PAGE < filteredData.length && (
        <button
          className={styles.btn}
          style={{ background: "#000", color: "#fff", width: "200px" }}
          onClick={handleLoadMore}
        >
          Mehr laden
        </button>
      )}
    </>
  );
}
