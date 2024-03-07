import styles from "./concept.module.scss";
import Image from "next/image";

import img from "@/assets/svg/concept.png";
import cardOne from '@/assets/svg/card_7.png';
import cardTwo from '@/assets/svg/card_3.png';
import cardThree from '@/assets/svg/card_8.png';
import cardFour from '@/assets/svg/card_1.png';
import cardFive from '@/assets/svg/card_2.png';
import cardSix from '@/assets/svg/card_9.png';





export default function Concept() { 
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.box}>
        <div className={styles.container_text}>
          <h2 className={styles.title}>MARKENKONZEPT</h2>
            <p className={styles.text}>Lace Culture — Damenunterwäsche für Mädchen mit exquisitem Geschmack.</p>
            <div className={styles.position}>
              <div className={styles.img_container}>
                <Image 
                  src={img}
                  alt="Image"
                  fill
                  priority={true}
                  loading="eager"
                />
              </div>
          </div>
          <p className={styles.text}>Wir kreieren Damenunterwäsche seit 2014, bereits Tausende von Kundinnen in der Ukraine und weltweit schätzen Stil und Qualität Lace Culture.</p>
          </div>
          <p className={styles.paragraph}>Was unterscheidet uns von anderen Geschäften?</p>
          <div style={{width: "100%"}}>
            <ul className={styles.card}>
              <li className={styles.flex}>
                <div className={styles.list_box}>
                  <Image 
                    src={cardOne}
                    alt="img"
                    fill
                    priority={true}
                    loading="eager"
                    />
                </div>
                <p className={styles.text_card} style={{width: "300px"}} >Ausschließlich Designermodelle.</p>
              </li>
              <li className={styles.flex}>
                <div className={styles.list_box}>
                  <Image 
                    src={cardTwo}
                    alt="img"
                    fill
                    priority={true}
                    loading="eager"
                    />
                </div>
                <p className={styles.text_card} style={{width: "300px"}} >️Möglichkeit zur Anpassung, falls die Größe bei der Anprobe nicht passt</p>
              </li>
              <li className={styles.flex}>
                <div className={styles.list_box}>
                  <Image 
                    src={cardThree}
                    alt="img"
                    fill
                    priority={true}
                    loading="eager"
                    />
                </div>
                <p className={styles.text_card} style={{width: "300px"}} >Möglichkeit, Produkte zu kombinieren.</p>
              </li>
              <li className={styles.flex}>
                <div className={styles.list_box}>
                  <Image 
                    src={cardFour}
                    alt="img"
                    fill
                    priority={true}
                    loading="eager"
                    />
                </div>
                <p className={styles.text_card} style={{width: "300px"}} >Anatomische Form des Unterwäschestücks.</p>
              </li>
              <li className={styles.flex}>
                <div className={styles.list_box}>
                  <Image 
                    src={cardFive}
                    alt="img"
                    fill
                    priority={true}
                    loading="eager"
                    />
                </div>
                <p className={styles.text_card} style={{width: "300px"}} >Maßanfertigung – 2-7 Werktage</p>
              </li>
              <li className={styles.flex}>
                <div className={styles.list_box}>
                  <Image 
                    src={cardSix}
                    alt="img"
                    fill
                    priority={true}
                    loading="eager"
                    />
                </div>
                <p className={styles.text_card} style={{width: "300px"}} >Unsere Position – Qualität von Design und Materialien.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
