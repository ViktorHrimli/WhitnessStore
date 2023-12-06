"use client"
import { useState } from "react";

import styles from "./card.module.scss"
import Image from "next/image";
import Photo from '@/assets/svg/card.jpeg'
import ModalCards from "@/libs/modal/modaCards/modalCards";

const CardImg = Photo;
const CardTitle = "set Volcano";
const CardText = "Сексуальный и изящный комплект с интересным дизайном";
const CardPrice = "1850";

export default function Card() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <>
      <ul className={styles.container_cards}>
      {Array.from({ length: 15 }, (id) => {
        return <li className={styles.link} key={id} onClick={()=> setIsOpenModal(true)}>
          <div className={styles.box_img}>
          <Image 
            src={CardImg}
            alt="img"
            fill
            priority={true}
            loading="eager"
            className={styles.img}
          />
        </div>
        <h3 className={styles.title}>{CardTitle}</h3>
        <p className={styles.description}>{CardText}</p>
        <p className={styles.title}>{CardPrice}€</p>
        <button className={styles.btn} onClick={()=> setIsOpenModal(true)}>In den warenkorb</button>
        </li>})}
      </ul>
      {isOpenModal && <ModalCards setIsOpenModal={setIsOpenModal} CardImg={CardImg} CardTitle={CardTitle} CardText={CardText} CardPrice={CardPrice} />}
  </>
  )
}