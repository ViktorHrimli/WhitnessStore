"use client";
import { useState, useEffect } from "react";

import FormPay from "@/libs/modal/formPay/formPay";
import styles from "./basket.module.scss";

export default function Basket({ storedItems, setStoredItems }) {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const [isShow, setIsShow] = useState(false);
  const [isQuantity, setIsQuantity] = useState(0);
  const [isShowTotal, setIsShowTotal] = useState(false);

  const [isScroll, setIsScroll] = useState(
    typeof window !== "undefined" ? window.scrollY : 0
  );

  useEffect(() => {
    setIsQuantity(storedItems.length);
    setIsShow(storedItems.length > 0);
  }, [storedItems]);

  useEffect(() => {
    if (isOpenModal) {
      setIsScroll(window.scrollY);

      document.body.style.overflow = "hidden";
      document.body.style.maxHeight = "100vh";
    }
    window.scrollTo(0, isScroll);

    return () => {
      document.body.style.overflowX = "hidden";
      document.body.style.maxHeight = "";
    };
  }, [isOpenModal]);

  const openModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  const totalCardPrice = storedItems.reduce((accumulator, item) => {
    return accumulator + parseFloat(item.price);
  }, 0);

  return (
    <>
      {isShow && (
        <div
          className={styles.container}
          onMouseLeave={() => setIsShowTotal(false)}
          onMouseOver={() => setIsShowTotal(true)}
        >
          <div
            className={styles.total_price}
            style={
              isShowTotal
                ? { opacity: "1", zIndex: "30" }
                : { opacity: "0", zIndex: "-1" }
            }
          >
            <div className={styles.icon_price}>
              <svg
                className={styles.services_icon}
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#292929"
                  d="M21 20.794H3a1 1 0 0 1-.866-1.5l9-15.588a1.04 1.04 0 0 1 1.732 0l9 15.588a1 1 0 0 1-.866 1.5Z"
                />
              </svg>
            </div>
            <span className={styles.total_price_text}>
              {totalCardPrice.toFixed(0)} €
            </span>
          </div>

          <div className={styles.icon_basket} onClick={openModal}>
            <svg
              stroke="currentColor"
              fill="black"
              viewBox="0 0 1024 1024"
              height="40"
              width="40"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M832 312H696v-16c0-101.6-82.4-184-184-184s-184 82.4-184 184v16H192c-17.7 0-32 14.3-32 32v536c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V344c0-17.7-14.3-32-32-32zm-432-16c0-61.9 50.1-112 112-112s112 50.1 112 112v16H400v-16zm392 544H232V384h96v88c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-88h224v88c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-88h96v456z"></path>
            </svg>
          </div>
          <div className={styles.number}>
            <span className={styles.text}>{isQuantity}</span>
          </div>
        </div>
      )}
      {isOpenModal && (
        <FormPay
          setIsOpenModal={setIsOpenModal}
          storedItems={storedItems}
          setStoredItems={setStoredItems}
          setIsQuantity={setIsQuantity}
        />
      )}
    </>
  );
}
