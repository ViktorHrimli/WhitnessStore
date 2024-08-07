"use client";
import { useContext } from "react";
import { DataContext } from "@/libs/components/wrapper/wraper_context";
import { getFormById } from "@/shared/getFormById";


import style from "./Description.module.scss";
import { services } from "@/shared/list";

export default function Description() {
  var { setisData } = useContext(DataContext);
  
  return (
    <>
      <section className={style.section}>
        <div className={style.container}>
          <div className={style.container_text}>
            <h2 className={style.title}>Handgemachte Unterwäsche</h2>
            <div className={style.line}></div>
            <p className={style.text}>
              <span className={style.text_bold}>Lace Culture</span>-
              Damenunterwäsche mit exquisitem Geschmack.
            </p>
            <p className={style.text_description}>
              Wir kreieren Unterwäsche seit 2014, und bereits Tausende von
              Kundinnen in der Ukraine und weltweit haben den Stil und die
              Qualität von Lace Culture geschätzt. Jetzt kannst auch du das tun
            </p>
            <ul className={style.container_btn}>
              {services.map((item, id) => (
                <li key={id} className={style.btn} >
                  <button
                    className={style.item_btn}
                    type="button"
                    onClick={() =>
                      setisData((prev) =>
                        prev === item.title ? "" : item.title
                      ) & getFormById("card")
                    }
                  >
                    {item.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
