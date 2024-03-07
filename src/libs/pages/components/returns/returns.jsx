import styles from './returns.module.scss'
import Image from 'next/image'

import icon from '@/assets/svg/how-to-icon.png';
import img from '@/assets/svg/returns-img.png';
import imgTwo from '@/assets/svg/returns-img-two.png';

export default function Returns() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.container_title}>
          <h2 className={styles.title}>UMTAUSCH UND RÜCKGABE</h2>
          <p className={styles.text}>Gemäß deutschem Gesetz unterliegt Unterwäsche nicht dem Umtausch und der Rückgabe.</p>
          <p className={styles.title}>ABER</p>
        </div>
        <div className={styles.flex}>
        <div className={styles.container_description}>
          <div className={styles.img}>
            <Image 
              src={icon}
              alt="img"
              fill
              priority={true}
              loading="eager"
            />
          </div>
          <p className={styles.text} style={{maxWidth: '412px'}}>Falls Ihnen etwas nicht passt, besteht die Möglichkeit zur Umnäharbeit.</p>
        </div>
        <div className={styles.container_description}>
          <div className={styles.img}>
            <Image 
              src={icon}
              alt="img"
              fill
              priority={true}
              loading="eager"
            />
          </div>
          <p className={styles.text} style={{maxWidth: '412px'}}>Im Falle eines Mangels - vollständige Rückerstattung oder wir fertigen Ihre Bestellung erneut an.</p>
          </div>
        </div>
        <div className={styles.conatainer_description}>
          <div>
            <p className={styles.title} style={{maxWidth: "420px", fontSize: "32px"}}>Wenn die Unterwäsche nicht passt oder Sie einen Defekt feststellen, schreiben Sie uns bitte.</p>
          </div>
          <div className={styles.returns_img}>
            <Image 
              src={img}
              alt="img"
              priority={true}
              loading="eager"
              className={styles.returns}
            />
          </div>
          <div className={styles.returns_img_two}>
            <Image 
              src={imgTwo}
              alt="img"
              priority={true}
              loading="eager"
              className={styles.img_two}
            />
          </div>
        </div>
      </div>
    </section>
  )
}