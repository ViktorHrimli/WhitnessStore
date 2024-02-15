"use client";
import { useEffect } from "react";
import { usePerfectState } from "@/shared/shared";
import IMask from "react-input-mask";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

import { PAYPAL_CLIENT_ID, PAYPAL_CLIENT_SECRET } from "@/shared/shared";

import stules from "./form.module.scss";
import PayPal from "@/libs/components/paypal/paypal";
import CountyCode from "./country_code/CountyCode";

export default function Form({ totalCardPrice }) {
  const [isPayPal, setIsPayPal] = usePerfectState(false);
  const [phone, setPhone] = usePerfectState("4\\9");
  const [phoneNumber, setPhoneNumber] = usePerfectState("");
  const [isOpenCountry, setIsOpenCountry] = usePerfectState(false);
  const [isOpen, setIsOpen] = usePerfectState(false);

  const [totalPrice, setTotalCardPrice] = usePerfectState(totalCardPrice);
  const [isDelivery, setDelivery] = usePerfectState(0);

  var deliveryPost = 3.7;
  var deliveryHome = 4.5;

  var post = () => {
    setTotalCardPrice(totalCardPrice + deliveryPost);
  };
  var home = () => {
    setTotalCardPrice(totalCardPrice + deliveryHome);
  };

  const handleDeliveryChange = (event) => {
    if (event.target.id === "post") {
      setTotalCardPrice(totalCardPrice + deliveryPost);
      setDelivery(deliveryPost);
    } else if (event.target.id === "home") {
      setTotalCardPrice(totalCardPrice + deliveryHome);
      setDelivery(deliveryHome);
    }
  };

  const initialOptions = {
    "client-id": PAYPAL_CLIENT_ID,
    components: "buttons",
    "enable-funding": "paylater,venmo,card",
    "disable-funding": "",
    "data-sdk-integration-source": "integrationbuilder_sc",
  };

  return (
    <PayPalScriptProvider options={initialOptions}>
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
        <input className={stules.input} type="text" id="promo" name="promo" />

        {/* radio btn DELIVERY */}
        <p className={stules.title}>Lieferung</p>
        <div className={stules.flex}>
          <div className={stules.border}></div>
          <input
            type="radio"
            id="post"
            className={stules.radio}
            name="delivery"
            onClick={handleDeliveryChange}
          />
          <label onClick={post} for="post" className={stules.text_radio}>
            Zur Post
          </label>
        </div>

        <div className={stules.flex} style={{ marginBottom: "10px" }}>
          <div className={stules.border}></div>
          <input
            type="radio"
            id="home"
            className={stules.radio}
            name="delivery"
            onClick={handleDeliveryChange}
          />

          <label onClick={home} for="home" className={stules.text_radio}>
            Auf Haus
          </label>
        </div>

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

        {/* radio btn PAY */}
        <p className={stules.title}>Zahlungsmethode</p>
        <div className={stules.flex}>
          <div className={stules.border}></div>
          <input
            type="radio"
            id="paypal"
            className={stules.radio}
            name="pay"
            onClick={() => setIsPayPal(true)}
          />

          <label for="paypal" className={stules.text_radio}>
            Bezahlung der Bestellung über PayPal.
          </label>
        </div>
        <div className={stules.flex} style={{ marginBottom: "30px" }}>
          <div className={stules.border}></div>

          <input
            type="radio"
            id="iban"
            className={stules.radio}
            name="pay"
            onClick={() => setIsPayPal(false)}
          />
          <label for="iban" className={stules.text_radio}>
            Überweisung auf IBAN
          </label>
        </div>

        <p className={stules.text}>
          Zwischensumme:
          <span> {totalPrice.toFixed(2)}</span> €
        </p>

        <p className={stules.text}>
          Zur Post:
          <span> {isDelivery.toFixed(2)}</span> €
        </p>

        <p className={stules.title_price} style={{ marginBottom: "30px" }}>
          Gesamtsumme:
          <span> {totalPrice.toFixed(2)}</span> €
        </p>

        {!isPayPal && (
          <button
            type="submit"
            className={stules.btn}
            onSubmit={(event) => {
              event.preventDefault();

              var data = JSON.parse(localStorage.getItem("storedItems"));

              data.forEach((item) => {
                if (item.id_cert) {
                  fetch(
                    `https://whitness-store.online/api/certificates/${item.id_cert}`,
                    {
                      method: "PUT",
                      body: JSON.stringify({
                        data: {
                          activated: true,
                        },
                      }),
                      headers: {
                        "Content-Type": "application/json",
                      },
                    }
                  ).catch((e) => {
                    console.log(e.message);
                  });
                }
              });
              localStorage.removeItem("storedItems");
            }}
          >
            ZUM KAUF WECHSELN
          </button>
        )}
      </form>
      {isPayPal && <PayPal amount={totalPrice.toFixed(2)} />}
    </PayPalScriptProvider>
  );
}
