"use client";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { PaymentForm } from "./FormPayPal";
import { useState, useEffect } from "react";

const App = ({ amount, totalPrice, doOnSubmit }) => {
  const [clientToken, setClientToken] = useState(null);

  const initialOptions = {
    "client-id":
      "AV1_H7E-iJaAiLKf43XD7Bj_TjjJGy50EdrViF1qNZkVcJZvL7B9LrbGb-imMREbo5CTWifUCIGpy1qm",
    "enable-funding": "venmo",
    "disable-funding": "paylater",
    "data-sdk-integration-source": "integrationbuilder_ac",
    dataClientToken: clientToken,
    components: "buttons,googlepay",
    currency: "EUR",
  };

  useEffect(() => {
    fetch("http://localhost:8888/api/token", {
      method: "POST",
    })
      .then((res) => res.json())
      .then((res) => setClientToken(res.client_token));
  }, []);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <PayPalScriptProvider options={initialOptions}>
        <PaymentForm
          amount={amount}
          totalPrice={totalPrice}
          doOnSubmit={doOnSubmit}
        />
      </PayPalScriptProvider>
    </div>
  );
};

export default App;
