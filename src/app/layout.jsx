import "./globals.scss";

import { Montserrat } from "next/font/google";

import Header from "@/libs/components/header/Header";
import Footer from "@/libs/components/footer/Footer";


import styles from "./page.module.scss";
import Basket from "@/libs/components/basket/basket";

const montserrat = Montserrat({ subsets: ["cyrillic"] });

export default async function RootLayout({ children }) {

  return (
    <html lang="de-DE">
      <body className={montserrat.className}>
        <Header />
        <Basket />
        <main className={styles.page}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
