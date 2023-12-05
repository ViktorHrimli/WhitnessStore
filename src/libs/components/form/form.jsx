import stules from './form.module.scss'

export default function Form({totalCardPrice}) {
  return (
    <form className={stules.form} action="/submit" method="post">
      <label className={stules.title} for="name">Ihr Name</label>
      <input className={stules.input} type="text" id="name" name="name" required />

      <label className={stules.title} for="email">Ihre E-Mail-Adresse</label>
      <input className={stules.input} type="email" id="email" name="email" placeholder='example@mail.com' required/>
      
      <label className={stules.title} for="phone">Ihre Telefonnummer</label>
      <input className={stules.input} type="tel" id="phone" placeholder='(999)999-99-99' name="phone" required />
      
      <label className={stules.title} for="promo">Aktionscode</label>
      <input className={stules.input} type="text" id="promo" name="promo" />
      
      <p className={stules.title}>Lieferung</p>
      <div className={stules.flex}>
        <input type="radio" className={stules.radio} name="delivery" value="email" checked />
        <label className={stules.text_radio}>Zur Post</label>
      </div>
      
      <div className={stules.flex} style={{marginBottom: "10px"}}>
        <input type="radio" className={stules.radio} name="delivery" value="home" />
        <label className={stules.text_radio}>auf Haus</label>
      </div>

      <label className={stules.title}>
        Versandadresse
          <input className={stules.input} style={{height: "136px"}} type="text" name="coment" value="" />
      </label>

      <p className={stules.title}>Zahlungsmethode</p>
      <div className={stules.flex}>
        <input type="radio" className={stules.radio} name="delivery" value="email" checked />
        <label className={stules.text_radio}>Bezahlung der Bestellung über PayPal.</label>
        </div>
      <div className={stules.flex} style={{marginBottom: "30px"}}>
        <input type="radio" className={stules.radio} name="delivery" value="home" />
        <label className={stules.text_radio}>Überweisung auf IBAN</label>
      </div>
      

      <p className={stules.text}>Zwischensumme: <span>{totalCardPrice.toFixed(2)}</span> €</p>
      <p className={stules.text}>Zur Post: <span>0</span> €</p>
      <p className={stules.title_price} style={{marginBottom: "30px"}}>Gesamtsumme:<span>{totalCardPrice.toFixed(2)}</span>€</p>



      <button type="submit" className={stules.btn}>ZUM KAUF WECHSELN</button>
    </form>
  
  )
}