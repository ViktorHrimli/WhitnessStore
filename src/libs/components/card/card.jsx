import styles from "./card.module.scss"
import Image from "next/image";
import Photo from '@/assets/svg/card.jpeg'

export default function Card() {
  return (
      <ul className={styles.container_cards}>
      {Array.from({ length: 50 }, (id) => {
        return <li className={styles.link} key={id}>
          <div className={styles.box_img}>
          <Image 
            src={Photo}
            alt="img"
            fill
            priority={true}
            loading="eager"
            className={styles.img}
          />
        </div>
        <h3 className={styles.title}>set Volcano</h3>
        <p className={styles.description}>Сексуальный и изящный комплект с интересным дизайном</p>
        <p className={styles.title}>1 850 €</p>
        <button className={styles.btn}>In den warenkorb</button>
        </li>})}
      </ul>
  )
}