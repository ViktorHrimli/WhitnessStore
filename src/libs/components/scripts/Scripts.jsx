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
          src="https://www.googletagmanager.com/gtag/js?id=TAG_ID"
        ></Script>

        <Script>
          {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'TAG_ID');`}
        </Script>
      </>
    )
  );
};

export { Scripts };
