"use client";

import { useState, useRef } from "react";
import styles from "./PaymentForm.module.css";

import { PayPalButtons } from "@paypal/react-paypal-js";

async function createOrderCallback(totalPrice) {
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
              id: "12",
              price: totalPrice,
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
    return `Could not initiate PayPal Checkout...${error}`;
  }
}

async function onApproveCallback(data, actions) {
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

    const transaction =
      orderData?.purchase_units?.[0]?.payments?.captures?.[0] ||
      orderData?.purchase_units?.[0]?.payments?.authorizations?.[0];
    const errorDetail = orderData?.details?.[0];

    if (errorDetail?.issue === "INSTRUMENT_DECLINED" && !data.card && actions) {
      return actions.restart();
    } else if (
      errorDetail ||
      !transaction ||
      transaction.status === "DECLINED"
    ) {
      let errorMessage;
      if (transaction) {
        errorMessage = `Transaction ${transaction.status}: ${transaction.id}`;
      } else if (errorDetail) {
        errorMessage = `${errorDetail.description} (${orderData.debug_id})`;
      } else {
        errorMessage = JSON.stringify(orderData);
      }

      throw new Error(errorMessage);
    } else {
      console.log(
        "Capture result",
        orderData,
        JSON.stringify(orderData, null, 2)
      );
      return `Transaction ${transaction.status}: ${transaction.id}. See console for all available details`;
    }
  } catch (error) {
    return `Sorry, your transaction could not be processed...${error}`;
  }
}

const Message = ({ content }) => {
  return <h1 color="red">{content}</h1>;
};

export const PaymentForm = ({ amount, totalPrice, doOnSubmit }) => {
  const [message, setMessage] = useState("");
  return (
    <div className={styles.form}>
      <PayPalButtons
        style={{
          shape: "pill",
          layout: "vertical",
        }}
        styles={{ marginTop: "4px", marginBottom: "4px" }}
        createOrder={async () =>
          await createOrderCallback(totalPrice, doOnSubmit)
        }
        onApprove={async (data) => setMessage(await onApproveCallback(data))}
      />

      <Message content={message} />
    </div>
  );
};
