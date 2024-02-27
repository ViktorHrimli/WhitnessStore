"use client";

import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

import {
  PAYPAL_CLIENT_ID,
  usePerfectState,
  certificateApI,
  payPalApi,
} from "@/shared/shared";

function Message({ content }) {
  return <h1>{content}</h1>;
}

function PayPal({ amount, doOnSubmit }) {
  const [message, setMessage] = usePerfectState("");

  const initialOptions = {
    "client-id": PAYPAL_CLIENT_ID,
    "enable-funding": "paylater,venmo,card",
    "disable-funding": "",
    "data-sdk-integration-source": "integrationbuilder_sc",
    currency: "EUR",
  };

  var succsesFullPay = () => {
    var data = JSON.parse(localStorage.getItem("storedItems"));

    data.forEach(
      (item) =>
        item.id_cert && certificateApI.activatedCertificate(item.id_cert)
    );

    localStorage.removeItem("storedItems");
  };

  return (
    <div className="App">
      <PayPalScriptProvider options={initialOptions}>
        <PayPalButtons
          style={{
            shape: "rect",
            layout: "vertical",
          }}
          createOrder={async () => {
            try {
              const response = await fetch("http://localhost:8888/api/orders", {
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
              });

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
                // (3) Successful transaction -> Show confirmation or thank you message
                // Or go to another URL:  actions.redirect('thank_you.html');
                succsesFullPay();
                doOnSubmit();
                actions.redirect("/sertificates");
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
      </PayPalScriptProvider>
      <Message content={message} />
    </div>
  );
}

export default PayPal;
