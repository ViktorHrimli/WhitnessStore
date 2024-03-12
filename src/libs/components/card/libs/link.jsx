import Image from "next/image";
import { useEffect, useState } from "react";
import { usePerfectState, doFindKey, BASE_URL } from "@/shared/shared";

import styles from "../card.module.scss";
import ModalCards from "@/libs/modal/modaCards/modalCards";

export default function List({
  title,
  price,
  description,
  setStoredItems,
  characteristic,
  mainImg,
  second_img,
  farbe,
  equipment,
  addition,
  gallery,
}) {
  var [isHover, setIsHover] = usePerfectState(false);
  var [isOpenModal, setIsOpenModal] = usePerfectState(false);
  var [isScroll, setIsScroll] = usePerfectState(
    typeof window !== "undefined" ? window.scrollY : 0
  );

  const [gallerySet, setGallerySet] = useState(() => {
    var mapData = gallery.data.map((item) => {
      var url = doFindKey(item);
      var baseURl = "https://whitness-store.online";
      return {
        original: baseURl + url,
        thumbnail: baseURl + url,
      };
    });
    return mapData;
  });

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
              src={`${"https://whitness-store.online"}${
                second_img["data"]["attributes"]["url"]
              }`}
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
          gallery={gallerySet}
          characteristic={characteristic}
          additionData={addition}
          equipment={equipment}
          farbe={farbe}
          title={title}
          description={description}
          price={price}
        />
      )}
    </>
  );
}
