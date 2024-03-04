import "./globals.scss";

import { Montserrat } from "next/font/google";

import Header from "@/libs/components/header/Header";
import Footer from "@/libs/components/footer/Footer";

import { PAYPAL_CLIENT_ID, CLIENT_TOKEN } from "@/shared/shared";

import styles from "./page.module.scss";

const montserrat = Montserrat({ subsets: ["cyrillic"] });

export default async function RootLayout({ children }) {
  return (
    <html lang="de-DE">
      <head>
        <script
          async={true}
          src={`https://www.paypal.com/sdk/js?client-id=${PAYPAL_CLIENT_ID}&components=hosted-fields,buttons,googlepay,applepay&currency=EUR`}
        ></script>

        {/* <script
          async={true}
          src="https://pay.google.com/gp/p/js/pay.js"
        ></script> */}
      </head>

      <body className={montserrat.className}>
        <Header />
        <main className={styles.page}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
