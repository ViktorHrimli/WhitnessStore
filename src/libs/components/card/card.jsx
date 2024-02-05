"use client";
import { useEffect } from "react";
import { usePerfectState } from "@/shared/hooks/useStateCustomHook";

import styles from "./card.module.scss";
import List from "./libs/link";
import Basket from "../basket/basket";
import { test } from "@/shared/helpers/findFieldOnObj";

const CardImg = [
  {
    original:
      "https://res.cloudinary.com/de0iwhqf4/image/upload/c_fill,ar_1:1/v1702499428/qwerty/IMG_4479_xxidhb.jpg",
    thumbnail:
      "https://res.cloudinary.com/de0iwhqf4/image/upload/c_fill,ar_1:1/v1702499428/qwerty/IMG_4479_xxidhb.jpg",
  },
  {
    original:
      "https://res.cloudinary.com/de0iwhqf4/image/upload/c_fill,ar_1:1/v1702499428/qwerty/IMG_4656_yffteq.jpg",
    thumbnail:
      "https://res.cloudinary.com/de0iwhqf4/image/upload/c_fill,ar_1:1/v1702499428/qwerty/IMG_4656_yffteq.jpg",
  },
  {
    original:
      "https://res.cloudinary.com/de0iwhqf4/image/upload/c_fill,ar_1:1/v1702499436/qwerty/photo_y0kpfh.jpg",
    thumbnail:
      "https://res.cloudinary.com/de0iwhqf4/image/upload/c_fill,ar_1:1/v1702499436/qwerty/photo_y0kpfh.jpg",
  },
  {
    original:
      "https://res.cloudinary.com/de0iwhqf4/image/upload/c_fill,ar_1:1/v1702499420/qwerty/87012130_u3bazj.jpg",
    thumbnail:
      "https://res.cloudinary.com/de0iwhqf4/image/upload/c_fill,ar_1:1/v1702499420/qwerty/87012130_u3bazj.jpg",
  },
  {
    original:
      "https://res.cloudinary.com/de0iwhqf4/image/upload/c_fill,ar_1:1/v1702499419/qwerty/43840393_bzew4q.jpg",
    thumbnail:
      "https://res.cloudinary.com/de0iwhqf4/image/upload/c_fill,ar_1:1/v1702499419/qwerty/43840393_bzew4q.jpg",
  },
  {
    original:
      "https://res.cloudinary.com/de0iwhqf4/image/upload/c_fill,ar_1:1/v1702499420/qwerty/36877471_dpsgxn.jpg",
    thumbnail:
      "https://res.cloudinary.com/de0iwhqf4/image/upload/c_fill,ar_1:1/v1702499420/qwerty/36877471_dpsgxn.jpg",
  },
];

export default function Card({ data }) {
  const [storedItems, setStoredItems] = usePerfectState([]);

  useEffect(() => {
    var localeData = JSON.parse(localStorage.getItem("storedItems"));
    localeData && setStoredItems(localeData);
  }, []);

  return (
    <>
      <ul className={styles.container_cards}>
        <Basket setStoredItems={setStoredItems} storedItems={storedItems} />
        {data.map((item, id) => (
          <List
            key={id}
            setStoredItems={setStoredItems}
            CardImg={CardImg}
            {...item["attributes"]}
          />
        ))}
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
