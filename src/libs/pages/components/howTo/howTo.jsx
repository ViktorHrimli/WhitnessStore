import styles from "./howTo.module.scss";
import Image from "next/image";

import howTo from '@/assets/svg/how-to.png';
import icon from '@/assets/svg/how-to-icon.png';
import sheat from "@/assets/svg/how-to-sheat.jpeg";
import size from "@/assets/svg/how-to-size.jpeg";



export default function HowTo() { 
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.container_title}>
          <h2 className={styles.title}>WIE MAN UNTERWÄSCHE AUSWÄHLT</h2>
          <p className={styles.text}>Dessous, das richtig zur Figur passt, korrigiert wunderbar kleine Mängel und betont die Vorzüge. Wie wählt man also die richtige Unterwäsche nach Größe aus?</p>
          <p className={styles.text}>Das ist nicht schwer! Um Ihre Größe zu bestimmen, nehmen Sie bitte einige Maße:</p>
        </div>
        <div className={styles.flex}>
          <div className={styles.text_box}>
            <div style={{display: "flex"}}>
              <div style={{position: "relative", marginRight: "10px"}}>
                <Image 
                  src={icon}
                  alt="img"
                  // fill
                  priority={true}
                  loading="eager"
                  style={{width: "24px", height: "24px", marginRight: "20px"}}
                />
                </div>
                <p className={styles.paragpaph} style={{marginBottom: "40px"}}>Unterbrustumfang. Stehen Sie aufrecht und messen Sie beim Einatmen.</p>
            </div>
            <div style={{display: "flex"}}>
            
          <div style={{position: "relative" , marginRight: "10px"}}>
            <Image 
              src={icon}
              alt="img"
              // fill
              priority={true}
              loading="eager"
              style={{width: "24px", height: "24px", marginRight: "20px"}}                
            />
            </div>
              <p className={styles.paragpaph} style={{marginBottom: "50px"}}>Brustumfang. Messen Sie entlang der Brustwarzenlinie, ohne zu ziehen. Stehen Sie gerade, halten Sie das Maßband horizontal.</p>
            </div>

          </div>
          <div className={styles.position}>
            <div className={styles.container_img}>
              <Image 
                src={howTo}
                alt="img"
                fill
                priority={true}
                loading="eager"
                />
              </div>
            </div>
        </div>
        <div>
          <p className={styles.description}>Die BH-Größe wird durch zwei Parameter bestimmt: eine Zahl und einen Buchstaben. Die Zahl repräsentiert den Unterbrustumfang, während der Buchstabe die Cup-Größe angibt. Sie können Ihre Größe in der Tabelle ermitteln:</p>
        </div>
        <div className={styles.sheat_img}>
          <Image 
              src={sheat}
              alt="img"
              fill
              priority={true}
              loading="eager"
            />
        </div>
        <p className={styles.text} style={{marginBottom: "30px"}}>Die Größe von Höschen wird durch zwei Parameter bestimmt:</p>
          <div className={styles.text_box}>
            <div style={{display: "flex"}}>
              <div style={{position: "relative"}}>
                <Image 
                  src={icon}
                  alt="img"
                  priority={true}
                  loading="eager"
                  style={{width: "24px", height: "24px", marginRight: "20px"}}
                />
                </div>
                <p className={styles.paragpaph} style={{marginBottom: "30px"}}>Unterbrustumfang. Stehen Sie aufrecht und messen Sie beim Einatmen.</p>
            </div>
            <div style={{display: "flex"}}>
            
          <div style={{position: "relative"}}>
            <Image 
              src={icon}
              alt="img"
              // fill
              priority={true}
              loading="eager"
              style={{width: "24px", height: "24px", marginRight: "20px"}}                
            />
            </div>
              <p className={styles.paragpaph} style={{marginBottom: "50px"}}>Brustumfang. Messen Sie entlang der Brustwarzenlinie, ohne zu ziehen. Stehen Sie gerade, halten Sie das Maßband horizontal.</p>
          </div>
        </div>
        <p className={styles.text} style={{marginBottom: "30px"}}>Die folgende Tabelle hilft Ihnen dabei, die passende Unterwäschegröße zu finden:</p>
        <div className={styles.size_img}>
          <Image 
              src={size}
              alt="img"
              fill
              priority={true}
              loading="eager"
              objectFit="cover"
            />
        </div>
      </div>
    </section>
  )
}
