import "./globals.scss";

import { Montserrat } from "next/font/google";

import Header from "@/libs/components/header/Header";
import Footer from "@/libs/components/footer/Footer";

import styles from "./page.module.scss";
import Head from "next/head";

const montserrat = Montserrat({ subsets: ["cyrillic"] });

import { Scripts } from "@/libs/components/scripts/Scripts";

export default async function RootLayout({ children }) {
  return (
    <html lang="de-DE">
      <Scripts />
      <Head></Head>

      <body className={montserrat.className} suppressHydrationWarning={true}>
        <noscript>
          <iframe
            src="https://metrics.actumtest.site/ns.html?id=GTM-TN2QSRR7"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <Header />
        <main className={styles.page}>{children}</main>
        <Footer />
      </body>

      {/* <script  src="https://applepay.cdn-apple.com/jsapi/v1/apple-pay-sdk.js"></script> */}

      <script async={true} src="https://pay.google.com/gp/p/js/pay.js"></script>
    </html>
  );
}
