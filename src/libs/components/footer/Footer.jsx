import styles from "./Footer.module.scss"
import Image from "next/image";
import Link from "next/link";

import paypall from "@/assets/svg/paypal.png"
import visa from "@/assets/svg/visa.svg"
import mastercard from "@/assets/svg/mastercard.svg"


export default function Footer() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.box}>
          <p className={styles.text}>© 2014-2023 LACECULTURE</p>
        </div>
        <div className={styles.box}>
          <div className={styles.box_contact}>
        <Link target="_blank" href="https://api.whatsapp.com/send/?phone=491764201647&text=Hallo.mich+interessiert&type=phone_number&app_absent=0">
            <svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 448 512"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" /></svg>
        </Link>
        <Link target="_blank" href="https://t.me/Filin_SEO">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="black" d="M22.265 2.428a2.048 2.048 0 0 0-2.078-.324L2.266 9.339a2.043 2.043 0 0 0 .104 3.818l3.625 1.261l2.02 6.682a.998.998 0 0 0 .119.252c.008.012.019.02.027.033a.988.988 0 0 0 .211.215a.972.972 0 0 0 .07.05a.986.986 0 0 0 .31.136l.013.001l.006.003a1.022 1.022 0 0 0 .203.02l.018-.003a.993.993 0 0 0 .301-.052c.023-.008.042-.02.064-.03a.993.993 0 0 0 .205-.114a250.76 250.76 0 0 1 .152-.129l2.702-2.983l4.03 3.122a2.023 2.023 0 0 0 1.241.427a2.054 2.054 0 0 0 2.008-1.633l3.263-16.017a2.03 2.03 0 0 0-.693-1.97ZM9.37 14.736a.994.994 0 0 0-.272.506l-.31 1.504l-.784-2.593l4.065-2.117Zm8.302 5.304l-4.763-3.69a1.001 1.001 0 0 0-1.353.12l-.866.955l.306-1.487l7.083-7.083a1 1 0 0 0-1.169-1.593L6.745 12.554L3.02 11.191L20.999 4Z" /></svg>
        </Link>
              <a className={styles.text} href="tel:+4917644201647">+4917644201647</a>
          </div>
          <div className={styles.box_contact}>
            <svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 512 512"><path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" /></svg>
            <a className={styles.text} href="mailto:laceculture.de@gmail.com">laceculture.de@gmail.com</a>
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.icons}>
            <div className={styles.img}>
            <Image 
                src={paypall}
                alt="pay"
                style={{width: "90px", height: "24px"}}
                priority={true}
              loading="eager"
            />
            </div>
            <div className={styles.img}>
            <Image 
                src={visa}
                alt="pay"
                style={{width: "40px", height: "40px"}}
                priority={true}
              loading="eager"
            />
            </div>
            <div className={styles.img}>
            <Image 
                src={mastercard}
                alt="pay"
                style={{width: "40px", height: "40px"}}
                priority={true}
              loading="eager"
            />
            </div>
          </div>
          <a className={styles.text} href="privacy-policy">Datenschutzrichtlinie</a>
        </div>
      </div>
    </section>
  )
}
