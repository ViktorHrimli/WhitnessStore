"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

import Form from "@/libs/components/form/form";
import styles from "./formPay.module.scss";

export default function FormPay({
  setIsOpenModal,
  setStoredItems,
  storedItems,
  setIsQuantity,
}) {
  const [totalCardPrice, setTotalPriceCard] = useState(() => {
    return storedItems.reduce((accumulator, item) => {
      return accumulator + +item.price;
    }, 0);
  });

  const closed = () => {
    setIsOpenModal(false);
  };

  const handleDelete = (idCard) => {
    const deleteCard = storedItems.filter((_, id) => id !== idCard);

    setStoredItems(deleteCard);
    setIsQuantity(deleteCard.length);
    var totalPrice = deleteCard.reduce((accumulator, item) => {
      return accumulator + +item.price;
    }, 0);

    setTotalPriceCard(totalPrice);

    localStorage.setItem("storedItems", JSON.stringify(deleteCard));
  };

  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <div className={styles.closed_menu} onClick={closed}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
          >
            <path
              fill="#000"
              d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6L6.4 19Z"
            />
          </svg>
        </div>
        <p className={styles.title}>DEINE BESTELLUNG</p>
        <div className={styles.card}>
          <ul>
            {storedItems.map((item, id) => {
              return (
                <li key={id} className={styles.keys}>
                  <div className={styles.img}>
                    <Image
                      src={item.CardImg[0].original}
                      alt="img"
                      width={70}
                      height={70}
                      priority={true}
                      loading="eager"
                      className={styles.img}
                    />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <p className={styles.text} style={{ textAlign: "left" }}>
                      {item.title}
                    </p>
                    {/* options */}
                    {item.satz.length > 0 ? (
                      <p className={styles.info}>Ausrüstung: {item.satz}</p>
                    ) : (
                      ""
                    )}
                    {item.color.length > 0 ? (
                      <p className={styles.info}>Farbe: {item.color}</p>
                    ) : (
                      ""
                    )}
                    {item.addition.length > 0 ? (
                      <p className={styles.info}>Zusatz: {item.addition}</p>
                    ) : (
                      ""
                    )}
                    {/* size  */}
                    {item.isChestCircumference.length > 0 ? (
                      <p className={styles.info}>
                        Unterbrustumfang: {item.isChestCircumference}
                      </p>
                    ) : (
                      ""
                    )}
                    {item.isUnderbustMeasurement.length > 0 ? (
                      <p className={styles.info}>
                        Brustumfang: {item.isUnderbustMeasurement}
                      </p>
                    ) : (
                      ""
                    )}
                    {item.isHipCircumference.length > 0 ? (
                      <p className={styles.info}>
                        Hüftumfang: {item.isHipCircumference}
                      </p>
                    ) : (
                      ""
                    )}
                    {item.isTaillenumfang.length > 0 ? (
                      <p className={styles.info}>
                        Taillenumfang: {item.isTaillenumfang}
                      </p>
                    ) : (
                      ""
                    )}
                  </div>
                  <span className={styles.text} style={{ marginLeft: "auto" }}>
                    {item.price}€
                  </span>

                  <div
                    className={styles.delite}
                    onClick={() => handleDelete(id)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#000"
                        d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6L6.4 19Z"
                      />
                    </svg>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <p className={styles.text}>
          Zwischensumme: <span>{totalCardPrice.toFixed(2)}</span> €
        </p>
        <>
          <Form totalCardPrice={totalCardPrice} />
        </>
      </div>
    </div>
  );
}
