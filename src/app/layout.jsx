import "./globals.scss";

import { Montserrat } from "next/font/google";

import Header from "@/libs/components/header/Header";
import Footer from "@/libs/components/footer/Footer";

import styles from "./page.module.scss";

const montserrat = Montserrat({ subsets: ["cyrillic"] });

export default async function RootLayout({ children }) {
  return (
    <html lang="de-DE">
      <head>
        <script src="https://www.paypal.com/sdk/js?client-id=AV1_H7E-iJaAiLKf43XD7Bj_TjjJGy50EdrViF1qNZkVcJZvL7B9LrbGb-imMREbo5CTWifUCIGpy1qm&currency=EUR"></script>
      </head>

      <body className={montserrat.className}>
        <Header />
        <main className={styles.page}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
