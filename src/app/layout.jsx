import "./globals.scss";

import { Montserrat } from "next/font/google";

import Header from "@/libs/components/header/Header";
import Footer from "@/libs/components/footer/Footer";

// import { makeSeoTemplate } from "@/shared/helpers/helpers";

import styles from "./page.module.scss";

const montserrat = Montserrat({ subsets: ["cyrillic"] });

// export async function generateMetadata() {
//   return makeSeoTemplate(API_LAYOUT);
// }

export default async function RootLayout({ children }) {

  return (
    <html lang="de-DE">
      <body className={montserrat.className}>
        <Header />
        <main className={styles.page}>
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
