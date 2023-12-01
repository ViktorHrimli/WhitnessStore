import styles from "./menu.module.scss"
import Nav from "@/libs/components/nav/nav";


export default function Menu() {
  return (
      <div className={styles.menu}>
        <Nav />
      </div>
  )
}
