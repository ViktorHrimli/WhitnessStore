"use client"
import { useEffect, useState } from "react"
import Image from "next/image"

import Form from "@/libs/components/form/form"
import styles from "./formPay.module.scss"

export default function FormPay({ setIsOpenModal, setStoredItems , storedItems , setIsQuantity, isQuantity }) {
  // const [storedItems, setStoredItems] = useState([]);
  
  // useEffect(() => {
  //   const storedItemsData = localStorage.getItem('storedItems');

  //   if (storedItemsData) {
  //     setStoredItems(JSON.parse(storedItemsData));
  //   }
  // }, [storedItems]);
  
  const closed = () => {
    setIsOpenModal(false);
  }

  const delite = (idCard) => {
    const deleteCard = storedItems.filter(item, id => idCard !== item.id)
    setStoredItems(deleteCard)

    // localStorage.setItem('storedItems', JSON.stringify(deleteCard));
  }

  const totalCardPrice = storedItems.reduce((accumulator, item) => {
    return accumulator + parseFloat(item.CardPrice);
  }, 0);

  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <div className={styles.closed_menu} onClick={closed}>
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="#000" d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6L6.4 19Z"/></svg>
      </div>
        <p className={styles.title}>DEINE BESTELLUNG</p>
        <div className={styles.card}>
          <ul>
            {storedItems.map((item, id) => {
              return(
              <li key={id} className={styles.keys}>
                  <div className={styles.img}>
                    <Image 
                      src={item.CardImg}
                      alt="img"
                      fill
                      priority={true}
                      loading="eager"
                      className={styles.img}
                    />
                  </div>
                <p className={styles.text}>{item.CardTitle}</p>
                  <span className={styles.text}>{item.CardPrice}€</span>
                  <div className={styles.delite} onClick={()=> delite(id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#000" d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6L6.4 19Z"/></svg>
                  </div>
              </li>)
            })}
          </ul> 
        </div>
          <p className={styles.text}>Zwischensumme: <span>{totalCardPrice.toFixed(2)}</span> €</p>
      
        <div>
          <Form totalCardPrice={totalCardPrice} />
        </div>
      </div>
    </div>
  )
}