import "./globals.scss";

import { Montserrat } from "next/font/google";

import Header from "@/libs/components/header/Header";
import Footer from "@/libs/components/footer/Footer";

import { PAYPAL_CLIENT_ID } from "@/shared/shared";
import onGooglePayLoaded from "@/libs/components/paypal/Google_pay";

import styles from "./page.module.scss";

const montserrat = Montserrat({ subsets: ["cyrillic"] });

export default async function RootLayout({ children }) {
  return (
    <html lang="de-DE">
      <body className={montserrat.className}>
        <Header />
        <main className={styles.page}>{children}</main>
        <Footer />

        <script
          async={true}
          src={`https://www.paypal.com/sdk/js?components=buttons&client-id=${PAYPAL_CLIENT_ID}&currency=EUR`}
        ></script>
      </body>
    </html>
  );
}
