import Image from "next/image";
import styles from "./delivery.module.scss";

import cardOne from '@/assets/svg/card_4.png';
import cardTwo from '@/assets/svg/card_5.png';
import cardThree from '@/assets/svg/card_2.png';
import cardFour from '@/assets/svg/card_6.png';

export default function Delivery() { 
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>LIEFERUNG UND ZAHLUNG</h2>
        <div className={styles.box}>
          <div className={styles.card_box}>
            <div className={styles.img_container}>
              <Image 
                src={cardOne}
                alt="img"
                fill
                priority={true}
                loading="eager"
                className={styles.img}
                />
            </div>
            <p className={styles.text} >Die Lieferung in Deutschland erfolgt durch Hermes und DHL.</p>
          </div>
          <div className={styles.card_box}>
            <div className={styles.img_container}>
              <Image 
                src={cardTwo}
                alt="img"
                fill
                priority={true}
                loading="eager"
                className={styles.img}
                />
            </div>
            <p className={styles.text} style={{width: "240px"}}>Versand von Bestellungen täglich bis 20:00 Uhr</p>
          </div>
        <div className={styles.card_box}>
            <div className={styles.img_container}>
              <Image 
                src={cardThree}
                alt="img"
                fill
                priority={true}
                loading="eager"
                className={styles.img}
                />
            </div>
            <p className={styles.text}>Die Herstellung von Unterwäsche erfolgt innerhalb von 2-7 Werktagen.</p>
        </div>
        <div className={styles.card_box}>
            <div className={styles.img_container}>
              <Image 
                src={cardFour}
                alt="img"
                fill
                priority={true}
                loading="eager"
                className={styles.img}
                />
            </div>
            <p className={styles.text}>Die Zahlung erfolgt per Direktüberweisung auf IBAN oder über PayPal</p>
          </div>
        </div>
        </div>
    </section>
  )
}
