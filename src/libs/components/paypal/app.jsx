"use client";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { PaymentForm } from "./FormPayPal";
import { useState, useEffect } from "react";

import GooglePayButton from "@google-pay/button-react";

const App = ({ amount, totalPrice, doOnSubmit }) => {
  const [clientToken, setClientToken] = useState(null);
  const [isTotalPrice, setIsTotalPrice] = useState(() => {
    return (totalPrice + amount).toFixed(2);
  });

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
    fetch("http://localhost:8888/paypal/api/token", {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => res.json())
      .then((res) => setClientToken(res.client_token))
      .catch((e) => console.log(e));

    console.log(isTotalPrice);
  }, []);
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "column",
        paddingRight: "50px",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <PayPalScriptProvider options={initialOptions}>
        <PaymentForm
          amount={amount}
          totalPrice={isTotalPrice}
          doOnSubmit={doOnSubmit}
        />
      </PayPalScriptProvider>

      <GooglePayButton
        style={{ marginLeft: "65px" }}
        environment="TEST"
        paymentRequest={{
          apiVersion: 2,
          apiVersionMinor: 0,
          allowedPaymentMethods: [
            {
              type: "CARD",
              parameters: {
                allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
                allowedCardNetworks: ["MASTERCARD", "VISA"],
              },
              tokenizationSpecification: {
                type: "PAYMENT_GATEWAY",
                parameters: {
                  gateway: "example",
                  gatewayMerchantId: "exampleGatewayMerchantId",
                },
              },
            },
          ],
          merchantInfo: {
            merchantId: "12345678901234567890",
            merchantName: "Demo Merchant",
          },
          transactionInfo: {
            totalPriceStatus: "FINAL",
            totalPriceLabel: "Total",
            totalPrice: "" + isTotalPrice,
            currencyCode: "EUR",
            countryCode: "GE",
          },
        }}
        onLoadPaymentData={(paymentRequest) => {
          console.log("load payment data", paymentRequest);
        }}
      />
    </div>
  );
};

export default App;
