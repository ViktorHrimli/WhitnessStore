import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "../card.module.scss";
import ModalCards from "@/libs/modal/modaCards/modalCards";

export default function List({
  CardImg,
  title,
  price,
  description,
  setStoredItems,
}) {
  const [isHover, setIsHover] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);

  console.log(title);

  const [isScroll, setIsScroll] = useState(
    typeof window !== "undefined" ? window.scrollY : 0
  );

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

  return (
    <>
      <li className={styles.link} onClick={() => setIsOpenModal(true)}>
        <div
          className={styles.box_img}
          onMouseOver={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          {isHover ? (
            <Image
              src={CardImg[1].thumbnail}
              alt="img"
              width={400}
              height={600}
              priority={true}
              loading="eager"
              className={styles.img}
            />
          ) : (
            <Image
              src={CardImg[0].thumbnail}
              alt="img"
              width={400}
              height={600}
              priority={true}
              loading="eager"
              className={styles.img}
            />
          )}
        </div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <p className={styles.title}>{price}€</p>
        <button className={styles.btn} onClick={() => setIsOpenModal(true)}>
          {/* In den warenkorb */}
          sehen
        </button>
      </li>
      {isOpenModal && (
        <ModalCards
          setIsOpenModal={setIsOpenModal}
          setStoredItems={setStoredItems}
          CardImg={CardImg}
          title={title}
          description={description}
          price={price}
        />
      )}
    </>
  );
}
