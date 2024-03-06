"use client";

import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { useEffect, useState } from "react";
import { PAYPAL_CLIENT_ID, certificateApI } from "@/shared/shared";
import { PaymentForm } from "./FormPayPal";
import onGooglePayLoaded from "./Google_pay";

function Message({ content }) {
  return <h1 style={{ color: "red" }}>{content}</h1>;
}

function PayPal({ amount, doOnSubmit }) {
  const [message, setMessage] = useState("");
  const [clientToken, setClientToken] = useState(null);

  const initialOptions = {
    "client-id": PAYPAL_CLIENT_ID,
    "enable-funding": "paylater,venmo",
    "disable-funding": "",
    "data-sdk-integration-source": "integrationbuilder_ac",
    dataClientToken: clientToken,
    components: "hosted-fields,buttons,googlepay",
    currency: "EUR",
  };

  var succsesFullPay = () => {
    var data = JSON.parse(localStorage.getItem("storedItems"));

    data.forEach(
      (item) =>
        item.CardTitle === "Zertifikat" &&
        certificateApI.createCertificate({
          data: {
            activated: true,
            used: false,
            amount: item.price,
            slug_id: item.slug_id,
          },
        })
    );

    localStorage.removeItem("storedItems");
  };

  useEffect(() => {
    fetch("http://localhost:8888/api/token", {
      method: "POST",
    })
      .then((res) => res.json())
      .then((res) => {
        setClientToken(res.client_token);
        onGooglePayLoaded();
      });
  }, []);

  return (
    clientToken && (
      <PayPalScriptProvider options={initialOptions}>
        <PaymentForm />
        <Message content={message} />
      </PayPalScriptProvider>
    )
  );
}

export default PayPal;
{
  /* <PayPalButtons
            style={{
              shape: "rect",
              layout: "vertical",
            }}
            createOrder={async () => {
              try {
                const response = await fetch(
                  "http://localhost:8888/api/orders",
                  {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      cart: [
                        {
                          id: "23",
                          amount: amount,
                        },
                      ],
                    }),
                  }
                );

                const orderData = await response.json();
                if (orderData.id) {
                  return orderData.id;
                } else {
                  const errorDetail = orderData?.details?.[0];
                  const errorMessage = errorDetail
                    ? `${errorDetail.issue} ${errorDetail.description} (${orderData.debug_id})`
                    : JSON.stringify(orderData);

                  throw new Error(errorMessage);
                }
              } catch (error) {
                console.error(error);
                setMessage(`Could not initiate PayPal Checkout...${error}`);
              }
            }}
            onApprove={async (data, actions) => {
              try {
                const response = await fetch(
                  `http://localhost:8888/api/orders/${data.orderID}/capture`,
                  {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                  }
                );

                const orderData = await response.json();
                const errorDetail = orderData?.details?.[0];

                if (errorDetail?.issue === "INSTRUMENT_DECLINED") {
                  return actions.restart();
                } else if (errorDetail) {
                  throw new Error(
                    `${errorDetail.description} (${orderData.debug_id})`
                  );
                } else {
                  succsesFullPay();
                  doOnSubmit();
                  // actions.redirect("https://www.actum.com.ua/");
                  const transaction =
                    orderData.purchase_units[0].payments.captures[0];
                  setMessage(
                    `Transaction ${transaction.status}: ${transaction.id}. See console for all available details`
                  );
                  console.log(
                    "Capture result",
                    orderData,
                    JSON.stringify(orderData, null, 2)
                  );
                }
              } catch (error) {
                console.error(error);
                setMessage(
                  `Sorry, your transaction could not be processed...${error}`
                );
              }
            }}
          /> */
}
