import style from "./Hero.module.scss";
import Image from "next/image";
import Img from "@/assets/svg/hero.jpeg";

export default function Hero() {
  return (
    <>
      <section className={style.section}>
        <article className={style.container}>
          <h2 className={style.title}>
            <strong>LACE CULTURE</strong>
          </h2>
          <p className={style.description}>
            Unterwäsche, die für Sie geschaffen wurde.
          </p>
          <div className={style.bacground}></div>

          <div className={style.bacground_img}>
            <Image
              src={Img}
              alt="Logo"
              fill
              priority={true}
              loading="eager"
              className={style.img}
            />
          </div>
        </article>
      </section>
    </>
  );
}
