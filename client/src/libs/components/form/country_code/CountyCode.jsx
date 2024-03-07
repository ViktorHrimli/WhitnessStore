"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { iconEnum } from "@/shared/icons/enums";

import styles from "./CountryCode.module.scss";

import code from "@/assets/json/countries.json";

export default function CountyCode({
  setPhone,
  setPhoneNumber,
  isOpenCountry,
  setIsOpenCountry,
  setIsOpen,
}) {
  const [codeCountry, setcodeCountry] = useState("DE");
  const [filterCountry, setFilterCountry] = useState("");

  const handleInputValue = (event) => {
    setFilterCountry(event.target.value);
  };

  const handleClick = () => {
    setIsOpenCountry(!isOpenCountry);
    setIsOpen(false);
  };

  const handleChangeNumberCountry = (code, phone) => {
    setcodeCountry(code);
    setPhone(phone.toString().replaceAll("9", `\\9`));
    setPhoneNumber("");
    setIsOpen(false);
  };

  const search = code.filter((item) =>
    item.name.toLowerCase().includes(filterCountry.toLowerCase())
  );

  return (
    <div className={`${styles.select_number} ${styles.width_modal}`}>
      <div className={styles.info_box} onClick={handleClick}>
        <div className={styles.image_wrapper}>
          <img
            className={styles.img_country}
            src={`https://flagsapi.com/${codeCountry}/shiny/64.png`}
            width={30}
            height={30}
          />
        </div>
      </div>
      <motion.div
        animate={{ rotate: isOpenCountry ? "180deg" : "0deg" }}
        transition={{ duration: 0.5 }}
        className={styles.conteiner_icon}
        onClick={handleClick}
      >
        <FontAwesomeIcon icon={iconEnum["arrowOpen"]} className={styles.icon} />
      </motion.div>
      {isOpenCountry && (
        <>
          <ul className={styles.code_box}>
            <li className={styles.item_list}>
              {/* <div className={stylesForm[border]}> */}
              <div className={styles.serch_icon_wrapper}>
                <FontAwesomeIcon icon={iconEnum["search"]} fill="#1F1F1F" />
              </div>
              <input
                className={styles.input_search}
                type="text"
                placeholder={"Geben Sie den Namen des Landes ein"}
                value={filterCountry}
                onChange={handleInputValue}
              />
              {/* </div> */}
            </li>
            {search.map((item, id) => (
              <li
                className={styles.item_list}
                onClick={() =>
                  handleChangeNumberCountry(item.code, item.phone) &
                  handleClick()
                }
                key={id}
              >
                <div className={styles.container_countris}>
                  <div className={styles.image_wrapper}>
                    <img
                      src={`https://flagsapi.com/${item.code}/shiny/64.png`}
                    />
                  </div>
                  <span className={styles.phone_color}>+{item.phone}</span>
                </div>

                <p style={{ width: "150px" }}>{item.name}</p>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
