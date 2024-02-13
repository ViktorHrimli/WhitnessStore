"use client";

import { usePerfectState } from "@/shared/shared";

import styles from "./certificates.module.scss";
import Basket from "@/libs/components/basket/basket";
import sertificat from "@/assets/svg/sertificat-2.png";

var Sertificates = () => {
  var [isOpen, setIsOpen] = usePerfectState(false);
  var [inputValue, setInputValue] = usePerfectState("");

  // const CardTitle = "Zertifikat";
  // const CardPrice = inputValue;
  // const CardImg = [
  //   {
  //     original: sertificat,
  //   },
  // ];

  // const satz = "";
  // const color = "";
  // const addition = "";
  // const isChestCircumference = "";
  // const isUnderbustMeasurement = "";
  // const isHipCircumference = "";
  // const isTaillenumfang = "";

  var handleClick = async (event) => {
    event.preventDefault();
    // setIsOpen(true);

    await fetch("https://whitness-store.online/api/certificates", {
      method: "POST",
      body: JSON.stringify({
        data: {
          activated: false,
          used: "",
          amount: +inputValue,
          title: "TEST",
        },
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).catch((e) => {
      console.log(e.message);
    });

    // const existingData = JSON.parse(localStorage.getItem("storedItems")) || [];

    // const newCardData = {
    //   CardTitle: CardTitle,
    //   CardPrice: CardPrice,
    //   CardImg: CardImg,
    //   satz,
    //   color,
    //   addition,
    //   isChestCircumference,
    //   isUnderbustMeasurement,
    //   isHipCircumference,
    //   isTaillenumfang,
    // };

    // const updatedData = [...existingData, newCardData];

    // localStorage.setItem("storedItems", JSON.stringify(updatedData));

    setInputValue("");
  };

  return (
    <article>
      <section className={styles.section}>
        <div className={styles.container}>
          <p className={styles.title}>Zertifikat</p>
          <p className={styles.text}>Drucken Sie auf jeden Betrag ab 50 Euro</p>
          <form className={styles.form}>
            <input
              className={styles.input}
              type="text"
              placeholder="50"
              required
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button className={styles.btn} onClick={handleClick}>
              Kaufen
            </button>
          </form>
        </div>
      </section>
      {isOpen && <Basket storedItems={[]} setStoredItems={[]} />}
    </article>
  );
};

export default Sertificates;
