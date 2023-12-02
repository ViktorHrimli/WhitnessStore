import styles from "./cards.module.scss";
import { enumsText } from './enums/enamsText';
import Card from "@/libs/components/card/card";


export default function Cards({ type }) { 
  const {title} = enumsText[type]
  
  return (
    <section>
      <div className={styles.container}>
        <h2 className={styles.title}>{title}</h2>
        <Card />
      </div>
    </section>
  )
}