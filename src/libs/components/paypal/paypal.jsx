"use client";

import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useEffect, useState } from "react";
import { PAYPAL_CLIENT_ID, certificateApI } from "@/shared/shared";

function Message({ content }) {
  return <h1 style={{ color: "red" }}>{content}</h1>;
}

function PayPal({ amount, doOnSubmit, totalPrice }) {
  const [message, setMessage] = useState("");
  const [price, setPrice] = useState(totalPrice + amount);

  const initialOptions = {
    "client-id": PAYPAL_CLIENT_ID,
    "enable-funding": "paylater,venmo",
    "disable-funding": "",
    "data-sdk-integration-source": "integrationbuilder_ac",
    components: "buttons",
    currency: "EUR",
  };

  var succsesFullPay = () => {
    var data = JSON.parse(localStorage.getItem("storedItems"));

    data &&
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
    setPrice(totalPrice + amount);
  }, [totalPrice]);

  return (
    <PayPalScriptProvider options={initialOptions}>
      <PayPalButtons
        disabled={false}
        style={{
          shape: "rect",
          layout: "vertical",
        }}
        createOrder={async () => {
          try {
            const response = await fetch(
              "https://www.space-test-space.space/api/orders",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  cart: [
                    {
                      id: "23",
                      amount: Math.floor(price),
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
              `https://www.space-test-space.space/api/orders/${data.orderID}/capture`,
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
      />

      <Message content={message} />
    </PayPalScriptProvider>
  );
}

export default PayPal;
