"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

const Scripts = () => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => setIsClient(true), []);
  return (
    isClient && (
      <>
        <Script
          id="gtagId"
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-CN31QQ8Z8C"
        ></Script>

        <Script id="gtagId1">
          {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-CN31QQ8Z8C');`}
        </Script>

        <Script id="suak-blyat-ebany-teg">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TN2QSRR7');
`}
        </Script>
      </>
    )
  );
};

export { Scripts };
