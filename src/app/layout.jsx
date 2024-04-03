import "./globals.scss";

import { Montserrat } from "next/font/google";

import Header from "@/libs/components/header/Header";
import Footer from "@/libs/components/footer/Footer";

import styles from "./page.module.scss";
import Head from "next/head";

const montserrat = Montserrat({ subsets: ["cyrillic"] });

export default async function RootLayout({ children }) {
  return (
    <html lang="de-DE">
      <Head></Head>
      <body className={montserrat.className} suppressHydrationWarning={true}>
        <Header />
        <main className={styles.page}>{children}</main>
        <Footer />
      </body>

      {/* <script  src="https://applepay.cdn-apple.com/jsapi/v1/apple-pay-sdk.js"></script> */}

      <script async={true} src="https://pay.google.com/gp/p/js/pay.js"></script>
    </html>
  );
}
