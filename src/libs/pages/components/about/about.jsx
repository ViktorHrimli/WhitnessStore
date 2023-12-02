import styles from './about.module.scss'
import { enumsText } from './enums/enamsText'

export default function About({ type }) { 
  const {title, textOne, textTwo, textThree, textFour, textFive, textSix} = enumsText[type]
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <p className={styles.title}>{title}</p>
        
        <p className={styles.description}>{textOne }</p>
        <p className={styles.description}>{textTwo}</p>
        <p className={styles.description}>{textThree}</p>
        <p className={styles.description}>{textFour}</p>
        <p className={styles.description}>{textFive}</p>
        <p className={styles.description}>{textSix}</p>
      </div>
    </section>
  )
}