import Image from "next/image";
import { useEffect } from "react";
import { usePerfectState, searchObj, BASE_URL, UPLOADS } from "@/shared/shared";

import styles from "../card.module.scss";
import ModalCards from "@/libs/modal/modaCards/modalCards";

export default function List({
  CardImg,
  title,
  price,
  description,
  setStoredItems,
  mainImg,
  gallery,
}) {
  var [isHover, setIsHover] = usePerfectState(false);
  var [isOpenModal, setIsOpenModal] = usePerfectState(false);
  var [isScroll, setIsScroll] = usePerfectState(
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
              src={`${"https://whitness-store.online"}${
                mainImg["data"]["attributes"]["url"]
              }`}
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
          gallery={gallery}
          CardImg={CardImg}
          title={title}
          description={description}
          price={price}
        />
      )}
    </>
  );
}
