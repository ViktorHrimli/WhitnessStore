"use client";
import { certificateApI } from "@/shared/shared";
import GooglePayButton from "@google-pay/button-react";
import PayPal from "@/libs/components/paypal/paypal";
import onGooglePayLoaded from "@/libs/components/paypal/google";
// import * as applePuY from "@/libs/components/paypal/applePay";

import App from "../paypal/app";
import IMask from "react-input-mask";

import stules from "./form.module.scss";
import CountyCode from "./country_code/CountyCode";
import { useState, useEffect } from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";

export default function Form({ totalCardPrice }) {
  var deliveryPost = 3.7;

  const [phone, setPhone] = useState("4\\9");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [isOpenCountry, setIsOpenCountry] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [onSubmit, setOnSubmit] = useState(false);

  const [isError, setIsError] = useState(null);
  const [theAmountCert, setTheAmountCert] = useState(0);
  const [useId, setUseID] = useState(null);

  const [totalPrice, setTotalCardPrice] = useState(
    totalCardPrice + deliveryPost
  );
  onGooglePayLoaded().catch(console.log);

  useEffect(() => {
    setTotalCardPrice(totalCardPrice + deliveryPost);
  }, [totalCardPrice]);

  useEffect(() => {
    if (useId) {
      certificateApI.useCertificate(useId);
    }
  }, [onSubmit]);

  useEffect(() => {
    setTotalCardPrice((prev) => prev - theAmountCert);
  }, [theAmountCert]);

  var theUsePromoCode = async (event) => {
    try {
      setIsError(null);
      var cert = await certificateApI.getCertificated(event.target.value);

      var cert_id = await cert["data"][0]["id"];

      setUseID(cert_id);
      if (Boolean(cert_id)) {
        setTheAmountCert(cert["data"][0]["attributes"]["amount"]);
      } else {
        setIsError("Code not found!");
      }
    } catch (error) {
      setIsError("Somthing wrong!");
    }
  };

  var doOnSubmit = () => {
    setOnSubmit(!onSubmit);

    localStorage.removeItem("storedItems");
  };

  return (
    <form className={stules.form}>
      <label className={stules.title}>Ihr Name</label>
      <input
        className={stules.input}
        type="text"
        id="name"
        name="name"
        required
      />

      <label className={stules.title}>Ihre E-Mail-Adresse</label>
      <input
        className={stules.input}
        type="email"
        id="email"
        name="email"
        placeholder="example@mail.com"
        required
      />

      <label className={stules.title}>Ihre Telefonnummer</label>
      <div style={{ position: "relative" }}>
        <IMask
          mask={`+${phone}(999)999 99 99`}
          maskChar={" "}
          type="text"
          alwaysShowMask={true}
          value={phoneNumber}
          onChange={(event) => {
            setPhoneNumber(event.target.value);
          }}
        >
          {() => (
            <input
              className={stules.input}
              style={{ padding: "0 70px" }}
              type="tel"
              id="phone"
              name="phone"
              required
            />
          )}
        </IMask>
        <CountyCode
          setPhone={setPhone}
          setPhoneNumber={setPhoneNumber}
          isOpenCountry={isOpenCountry}
          setIsOpenCountry={setIsOpenCountry}
          setIsOpen={setIsOpen}
        />
      </div>
      <label className={stules.title}>Aktionscode</label>
      <input
        className={stules.input}
        type="text"
        id="promo"
        name="promo"
        onChange={theUsePromoCode}
      />

      {isError && <h1>{isError}</h1>}

      {/* input  */}
      <label className={stules.title}>
        Versandadresse
        <textarea
          className={stules.input}
          style={{
            height: "136px",
            padding: "17px 20px 5px 17px",
            resize: "none",
          }}
          type="text"
          placeholder="Die Stadt. Straße. Hausnummer. Postleitzahl"
        />
      </label>
      <p className={stules.text}>
        Zwischensumme:
        <span> {totalPrice.toFixed(2)}</span> €
      </p>

      <p className={stules.text}>
        Zur Post:
        <span> {deliveryPost.toFixed(2)}</span> €
      </p>

      <p className={stules.title_price} style={{ marginBottom: "30px" }}>
        Gesamtsumme:
        <span>{(totalPrice + deliveryPost).toFixed(2)}</span> €
      </p>

      <div id="container-btn-google"></div>

      <App />

      {/* <PayPal
        amount={deliveryPost}
        totalPrice={totalPrice}
        doOnSubmit={doOnSubmit}
      /> */}

      <div id="applepay-container"></div>
      {/* <GooglePayButton
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
            totalPrice: "100.00",
            currencyCode: "USD",
            countryCode: "US",
          },
        }}
        onLoadPaymentData={(paymentRequest) => {
          console.log("load payment data", paymentRequest);
        }}
      /> */}
    </form>
  );
}
