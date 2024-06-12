import "./globals.scss";

import { Montserrat } from "next/font/google";

import Header from "@/libs/components/header/Header";
import Footer from "@/libs/components/footer/Footer";

import styles from "./page.module.scss";
import Head from "next/head";
import Script from "next/script";

const montserrat = Montserrat({ subsets: ["cyrillic"] });

export default async function RootLayout({ children }) {
  return (
    <html lang="de-DE">
      <Head>
        <Script>{`${(function (w, d, s, l, i) {
          w[l] = w[l] || [];
          w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
          var f = d.getElementsByTagName(s)[0],
            j = d.createElement(s),
            dl = l != "dataLayer" ? "&l=" + l : "";
          j.async = true;
          j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
          f.parentNode.insertBefore(j, f);
        })(window, document, "script", "dataLayer", "GTM-TN2QSRR7")}`}</Script>
      </Head>
      <body className={montserrat.className} suppressHydrationWarning={true}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TN2QSRR7"
            height="0"
            width="0"
            style="display:none;visibility:hidden"
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
