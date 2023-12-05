"use client"

import Image from "next/image";
import { useState } from "react";

import styles from './modalCards.module.scss';

import Basket from '@/libs/components/basket/basket';


export default function ModalCards({setIsOpenModal, CardImg, CardTitle, CardText, CardPrice}) {
  const [isOpen, setIsOpen] = useState(false);

  const closed = () => {
    setIsOpenModal(false);
  }
  
  const handleClick = (event) => {
    event.preventDefault();
    setIsOpen(true);

    const existingData = JSON.parse(localStorage.getItem('storedItems')) || [];
    const newCardData = {CardImg: CardImg, CardTitle: CardTitle, CardPrice: CardPrice};
    const updatedData = [...existingData, newCardData];
    localStorage.setItem('storedItems', JSON.stringify(updatedData));
  };
  
  return (
    <>
    <div className={styles.modal}>
      <div className={styles.closed} onClick={closed}>
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="#000" d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6L6.4 19Z"/></svg>
      </div>
      <div className={styles.container}>
        <div className={styles.container_img}>
          <Image 
            src={CardImg}
            alt="img"
            fill
            priority={true}
            loading="eager"
            className={styles.img}
          />
        </div>
        <div className={styles.container_text}>
          <h3 className={styles.title}>{CardTitle}</h3>
          <p className={styles.price}>{CardPrice}€</p>
          <button className={styles.btn} onClick={handleClick}>In den warenkorb</button>
          <p className={styles.description}>{CardText}</p>
        </div>
      </div>
      </div>
      {isOpen && <Basket />}
  </>
  )
}