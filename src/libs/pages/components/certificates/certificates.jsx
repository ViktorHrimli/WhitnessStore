"use client";
import { v4 as uuidv4 } from "uuid";
import { usePerfectState, certificateApI } from "@/shared/shared";

import styles from "./certificates.module.scss";
import Basket from "@/libs/components/basket/basket";
import sertificat from "@/assets/svg/sertificat-2.png";

var Sertificates = () => {
  var [isOpen, setIsOpen] = usePerfectState(false);
  var [inputValue, setInputValue] = usePerfectState("");
  var [storedItems, setStoredItems] = usePerfectState([]);

  const CardImg = [
    {
      original: sertificat,
    },
  ];

  const satz = "";
  const color = "";
  const addition = "";
  const isChestCircumference = "";
  const isUnderbustMeasurement = "";
  const isHipCircumference = "";
  const isTaillenumfang = "";

  var handleClick = async (event) => {
    event.preventDefault();
    if (!inputValue) {
      return;
    }
    setIsOpen(true);

    var uuid = uuidv4();

    const existingData = JSON.parse(localStorage.getItem("storedItems")) || [];

    var options = {
      data: {
        activated: false,
        used: false,
        amount: +inputValue,
        slug_id: uuid,
      },
    };

    var theId = await certificateApI.createCertificate(options);

    const newCardData = {
      CardTitle: "Zertifikat",
      price: +inputValue,
      CardImg: CardImg,
      satz,
      color,
      addition,
      isChestCircumference,
      isUnderbustMeasurement,
      isHipCircumference,
      isTaillenumfang,
      slug_id: theId ? uuid : null,
      id_cert: theId,
    };

    const updatedData = [...existingData, newCardData];

    localStorage.setItem("storedItems", JSON.stringify(updatedData));

    setStoredItems(updatedData);

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
              type="number"
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
      {isOpen && (
        <Basket storedItems={storedItems} setStoredItems={setStoredItems} />
      )}
    </article>
  );
};

export default Sertificates;
