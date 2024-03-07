import style from "./Description.module.scss"
import {services} from "@/shared/list"

export default function Description() {
  return (
    <>
      <section className={style.section}>
        <div className={style.container}>
          <div className={style.container_text}>
            <h2 className={style.title}>Handgemachte Unterwäsche</h2>
            <div className={style.line}></div>
            <p className={style.text}>
              <span className={style.text_bold}>Lace Culture</span>
              - Damenunterwäsche mit exquisitem Geschmack.
            </p>
            <p className={style.text_description}>Wir kreieren Unterwäsche seit 2014, und bereits Tausende von Kundinnen in der Ukraine und weltweit haben den Stil und die Qualität von Lace Culture geschätzt. Jetzt kannst auch du das tun</p>
            <ul className={style.container_btn}>
              {services.map((item, id) => (
                <li key={id} className={style.btn}>{item.title}</li>
              ))}
            </ul>    
          </div>
        </div>
      </section>
    </>
  );
}
