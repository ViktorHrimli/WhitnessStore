"use client";

import React, { useEffect, useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

var Message = ({ content }) => {
  return <p>{content}</p>;
};

var initialOptions = {
  clientId: "test",
  currency: "USD",
  intent: "capture",
  // "enable-funding": "paylater,venmo,card",
  // "disable-funding": "",
  // "data-sdk-integration-source": "integrationbuilder_sc",
};

var PayPal = ({ order }) => {
  const [message, setMessage] = useState("");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient && (
        <PayPalScriptProvider options={{ clientId: "test" }}>
          <PayPalButtons />
        </PayPalScriptProvider>
      )}
      {/* <Message content={message} /> */}
    </>
  );
};

export default PayPal;
