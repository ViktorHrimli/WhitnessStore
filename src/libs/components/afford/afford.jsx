import styles from './afford.module.scss'
import Image from "next/image";
import CardOne from '@/assets/svg/card_1.png'
import CardTwo from '@/assets/svg/card_2.png'
import CardThree from '@/assets/svg/card_3.png'


export default function Afford() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Sie können es sich leisten</h2>
        <div className={styles.line}></div>
        <p className={styles.description}>Wir arbeiten daran, das Leben unserer Kunden besser und schöner zu machen.</p>
      </div>
      <div className={styles.container_card}>
        <div className={styles.card}>
          <div className={styles.img}>
            <Image 
                src={CardOne}
                alt="card"
                // fill
                priority={true}
              loading="eager"
            />
            </div>
          <p className={styles.text}>Anatomisch entwickelte Modelle</p>
        </div>
        <div className={styles.card}>
          <div className={styles.img}>
            <Image 
                src={CardTwo}
                alt="card"
                // fill
                priority={true}
              loading="eager"
            />
            </div>
          <p className={styles.text}>Herstellung der Bestellung: 3-7 Werktage</p>
        </div>
        <div className={styles.card}>
          <div className={styles.img}>
            <Image 
                src={CardThree}
                alt="card"
                // fill
                priority={true}
              loading="eager"
            />
            </div>
          <p className={styles.text}>Individuelle Anfertigung für jeden Kunden.</p>
        </div>
      </div>
    </section>
  )
}