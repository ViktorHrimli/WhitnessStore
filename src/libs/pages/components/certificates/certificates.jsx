"use client"

import { useState } from 'react'

import styles from './certificates.module.scss'
import Basket from '@/libs/components/basket/basket';


export default function Sertificates() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const CardTitle = "Zertifikat";
  const CardPrice = inputValue;
  const satz = "";
  const color = "";
  const addition = "";
  const isChestCircumference = "";
  const isUnderbustMeasurement = "";
  const isHipCircumference = "";
  const isTaillenumfang = "";


  
  const handleClick = (event) => {
    event.preventDefault();
    setIsOpen(true);

    const existingData = JSON.parse(localStorage.getItem('storedItems')) || [];

    const newCardData = { CardTitle: CardTitle, CardPrice: CardPrice, satz, color, addition, isChestCircumference, isUnderbustMeasurement, isHipCircumference, isTaillenumfang};

    const updatedData = [...existingData, newCardData];

    localStorage.setItem('storedItems', JSON.stringify(updatedData));
    // localStorage.setItem('storedItems', JSON.stringify([{CardTitle , CardPrice}]));
    setInputValue('');
  };

  return (
    <>
    <section className={styles.section}>
      <div className={styles.container}>
        <p className={styles.title}>{CardTitle}</p>
        <p className={styles.text}>Drucken Sie auf jeden Betrag ab 50 Euro</p>
        <form action="" className={styles.form}>
            <input className={styles.input}
              type="text"
              placeholder='50'
              required
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            
          <button className={styles.btn} onClick={handleClick}>Kaufen</button>
        </form>
      </div>
    </section>
      {isOpen && <Basket />}
      </>
  )
}