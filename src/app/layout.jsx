import "./globals.scss";

import { Montserrat } from "next/font/google";

import Header from "@/libs/components/header/Header";
import Footer from "@/libs/components/footer/Footer";

import { PAYPAL_CLIENT_ID, MERCHANT_ID } from "@/shared/shared";

import styles from "./page.module.scss";
import Head from "next/head";
import Script from "next/script";

const montserrat = Montserrat({ subsets: ["cyrillic"] });

export default async function RootLayout({ children }) {
  return (
    <html lang="de-DE">
      <Head>
        {/* <script
          async={true}
          src={`https://www.paypal.com/sdk/js?components=buttons&client-id=${PAYPAL_CLIENT_ID}&currency=EUR`}
        ></script> */}

        {/* <script
          src={`https://www.paypal.com/sdk/js?client-id=${PAYPAL_CLIENT_ID}&components=googlepay`}
        ></script> */}
        {/* <script  src="https://applepay.cdn-apple.com/jsapi/v1/apple-pay-sdk.js"></script> */}
      </Head>
      <body className={montserrat.className}>
        <Header />
        <main className={styles.page}>{children}</main>
        <Footer />
      </body>

      <script async={true} src="https://pay.google.com/gp/p/js/pay.js"></script>
    </html>
  );
}
