'use client'
import { useState } from 'react'
import IMask from "react-input-mask";


import stules from './form.module.scss'
import PayPal from '@/app/paypal/paypal'
import CountyCode from './country_code/CountyCode'

export default function Form({ totalCardPrice }) {
  const [isPayPal, setIsPayPal] = useState(false);
  const [phone, setPhone] = useState("4\\9");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isOpenCountry, setIsOpenCountry] = useState(false);
  const [isOpen, setIsOpen] = useState(false);


  return (
    <>
      <form className={stules.form}
        action="/submit" method="post">
      <label className={stules.title}>Ihr Name</label>
      <input className={stules.input} type="text" id="name" name="name" required />

      <label className={stules.title}>Ihre E-Mail-Adresse</label>
      <input className={stules.input} type="email" id="email" name="email" placeholder='example@mail.com' required/>
      
      <label className={stules.title}>Ihre Telefonnummer</label>
      <div style={{position: "relative"}}>
        <IMask
          mask={`+${phone} (999) 9999999`}
          maskChar={" "}
          type="text"
          alwaysShowMask={true}
        >
          {(inputProps) => (
            <input className={stules.input}
            style={{padding: "0 70px"}}
            type="tel"
            id="phone"
            // placeholder='(999)999-99-99'
            name="phone"
            required
          />
          )}
        </IMask>
          <CountyCode setPhone={setPhone} setPhoneNumber={setPhoneNumber} isOpenCountry={isOpenCountry} setIsOpenCountry={setIsOpenCountry}  setIsOpen={setIsOpen} />
      </div>
      <label className={stules.title}>Aktionscode</label>
      <input className={stules.input} type="text" id="promo" name="promo" />
      
      <p className={stules.title}>Lieferung</p>
      <div className={stules.flex}>
        <input type="radio" className={stules.radio} name="delivery" />
        <label className={stules.text_radio}>Zur Post</label>
      </div>
      
      <div className={stules.flex} style={{marginBottom: "10px"}}>
        <input type="radio" className={stules.radio} name="delivery" />
        <label className={stules.text_radio}>auf Haus</label>
      </div>

      <label className={stules.title}>
        Versandadresse
          <input className={stules.input} style={{height: "136px"}} type="text" />
      </label>

      <p className={stules.title}>Zahlungsmethode</p>
      <div className={stules.flex}>
        <input type="radio" className={stules.radio} name="delivery" />
        <label className={stules.text_radio}>Bezahlung der Bestellung über PayPal.</label>
        </div>
      <div className={stules.flex} style={{marginBottom: "30px"}}>
        <input type="radio" className={stules.radio} name="delivery" />
        <label className={stules.text_radio}>Überweisung auf IBAN</label>
      </div>
      

      <p className={stules.text}>Zwischensumme: <span>{totalCardPrice.toFixed(2)}</span> €</p>
      <p className={stules.text}>Zur Post: <span>0</span> €</p>
      <p className={stules.title_price} style={{marginBottom: "30px"}}>Gesamtsumme:<span>{totalCardPrice.toFixed(2)}</span>€</p>



      <button type="submit" className={stules.btn} onClick={() => {setIsPayPal(true)}}>ZUM KAUF WECHSELN</button>
    </form>
      {isPayPal && <PayPal order={totalCardPrice.toFixed(2)} />}
  </>
  )
}