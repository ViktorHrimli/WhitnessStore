import styles from './certificates.module.scss'

export default function Sertificates() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <p className={styles.title}>Zertifikate</p>
        <p className={styles.text}>Drucken Sie auf jeden Betrag ab 50 Euro</p>
        <form action="" className={styles.form}>
          <input className={styles.input} type="text" placeholder='50' />
          <button className={styles.btn}>Kaufen</button>
        </form>
      </div>
    </section>
  )
}