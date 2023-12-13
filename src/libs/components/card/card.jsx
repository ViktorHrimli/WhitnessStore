"use client"
import { useState } from "react";
// import { v4 as uuidv4 } from 'uuid';

import styles from "./card.module.scss"
import Image from "next/image";
import Photo from '@/assets/svg/card.jpeg'
import ModalCards from "@/libs/modal/modaCards/modalCards";

const CardImg = [
  {
    original: "https://res.cloudinary.com/de0iwhqf4/image/upload/c_fill,ar_1:1/v1702499428/qwerty/IMG_4479_xxidhb.jpg",
    thumbnail: "https://res.cloudinary.com/de0iwhqf4/image/upload/c_fill,ar_1:1/v1702499428/qwerty/IMG_4479_xxidhb.jpg",
  },
  {
    original: "https://res.cloudinary.com/de0iwhqf4/image/upload/c_fill,ar_1:1/v1702499428/qwerty/IMG_4656_yffteq.jpg",
    thumbnail: "https://res.cloudinary.com/de0iwhqf4/image/upload/c_fill,ar_1:1/v1702499428/qwerty/IMG_4656_yffteq.jpg",
  },
  {
    original: "https://res.cloudinary.com/de0iwhqf4/image/upload/c_fill,ar_1:1/v1702499436/qwerty/photo_y0kpfh.jpg",
    thumbnail: "https://res.cloudinary.com/de0iwhqf4/image/upload/c_fill,ar_1:1/v1702499436/qwerty/photo_y0kpfh.jpg",
  },
  {
    original: "https://res.cloudinary.com/de0iwhqf4/image/upload/c_fill,ar_1:1/v1702499420/qwerty/87012130_u3bazj.jpg",
    thumbnail: "https://res.cloudinary.com/de0iwhqf4/image/upload/c_fill,ar_1:1/v1702499420/qwerty/87012130_u3bazj.jpg",
  },
  {
    original: "https://res.cloudinary.com/de0iwhqf4/image/upload/c_fill,ar_1:1/v1702499419/qwerty/43840393_bzew4q.jpg",
    thumbnail: "https://res.cloudinary.com/de0iwhqf4/image/upload/c_fill,ar_1:1/v1702499419/qwerty/43840393_bzew4q.jpg",
  },
  {
    original: "https://res.cloudinary.com/de0iwhqf4/image/upload/c_fill,ar_1:1/v1702499420/qwerty/36877471_dpsgxn.jpg",
    thumbnail: "https://res.cloudinary.com/de0iwhqf4/image/upload/c_fill,ar_1:1/v1702499420/qwerty/36877471_dpsgxn.jpg",
  },
];
const CardTitle = "set Volcano";
const CardText = "Сексуальный и изящный комплект с интересным дизайном";
const CardPrice = "1850";
// const CardId = uuidv4()

export default function Card() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isHover, setIsHover] = useState(false);


  const [cards, setCards] = useState(Array.from({ length: 12 }));

  const loadMoreCards = () => {
    // Вместо этого места вы можете выполнить запрос к вашему API для получения дополнительных карточек товаров
    // Обновите cards с полученными данными
    // Например, с использованием fetch или axios
    // const response = await fetch('ваш_адрес_апи_для_товаров');
    // const data = await response.json();
    // setCards(prevCards => [...prevCards, ...data]);

    // Для примера, добавим пустые карточки
    setCards(prevCards => [...prevCards, ...Array.from({ length: 6 })]);
  };

  return (
    <>
      <ul className={styles.container_cards}>
        {cards.map((_, id) => (
        <li className={styles.link} key={id} onClick={()=> setIsOpenModal(true)}>
            <div className={styles.box_img} onMouseOver={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} >
              {isHover ? 
                <Image
                  src={CardImg[1].thumbnail}
                  alt="img"
                  width={400}
                  height={600}
                  priority={true}
                  loading="eager"
                  className={styles.img}
                />
              : <Image
                  src={CardImg[0].thumbnail}
                  alt="img"
                  width={400}
                  height={600}
                  priority={true}
                  loading="eager"
                  className={styles.img}
                />}
            </div>
        <h3 className={styles.title}>{CardTitle}</h3>
        <p className={styles.description}>{CardText}</p>
          <p className={styles.title}>{CardPrice}€</p>
        <button className={styles.btn} onClick={()=> setIsOpenModal(true)}>In den warenkorb</button>
        </li>))}
      </ul>
        <button className={styles.btn} style={{background: "#000", color: "#fff", width: "200px"}} onClick={loadMoreCards}>Mehr laden</button>
      {isOpenModal && <ModalCards
        setIsOpenModal={setIsOpenModal}
        CardImg={CardImg}
        CardTitle={CardTitle}
        CardText={CardText}
        CardPrice={CardPrice}
      />}
  </>
  )
}