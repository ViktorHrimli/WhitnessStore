import styles from "./about.module.scss"
import Image from "next/image";
import Img from "@/assets/svg/about.png"


export default function About() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.container_text}>
          <h2 className={styles.title}>Über das Projekt</h2>
          <p className={styles.description}>Lace Culture — Unterwäschegeschäft für Fräulein, die sich besonders und einzigartig fühlen möchten. Ein handgefertigtes Dessous-Set setzt einen lebhaften Akzent auf die Schönheit und innere Stärke jeder Frau. Denn wir alle sind einzigartig und unverwechselbar.</p>
        </div>
        <div className={styles.container_img}>
          <Image 
              src={Img}
              alt="Img"
              priority={true}
              fill
              loading="eager"
              objectFit="cover"
            />
        </div>
      </div>
    </section>
  )
}