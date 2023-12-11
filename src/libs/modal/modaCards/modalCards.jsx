"use client"

import Image from "next/image";
import styles from './modalCards.module.scss';


export default function ModalCards({setIsOpenModal, CardImg, CardTitle, CardText, CardPrice}) {

  const closed = () => {
    setIsOpenModal(false);
  }
  
  const handleClick = (event) => {
    event.preventDefault();

    const existingData = JSON.parse(localStorage.getItem('storedItems')) || [];
    const newCardData = {CardImg: CardImg, CardTitle: CardTitle, CardPrice: CardPrice};
    const updatedData = [...existingData, newCardData];
    localStorage.setItem('storedItems', JSON.stringify(updatedData));
  };
  
  return (
    <>
    <div className={styles.modal}>
      <div className={styles.closed} onClick={closed}>
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="#000" d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6L6.4 19Z"/></svg>
      </div>
      <div className={styles.container}>
        <div className={styles.container_img}>
          <Image 
            src={CardImg}
            alt="img"
            fill
            priority={true}
            loading="eager"
            className={styles.img}
          />
        </div>
        <div className={styles.container_text}>
            <h3 className={styles.title}>{CardTitle}</h3>
          <p className={styles.price}>{CardPrice}€</p>

            <form action="" className={styles.form_container}>
              <div className={styles.form}>
              <label className={styles.description}>Ausrüstung
                <select className={styles.select} required name="list">
                  <option value="1">Синий</option>
                  <option value="2">Зеленый</option>
                  <option value="3">Желтый</option>
                </select>
                <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M21 20.794H3a1 1 0 0 1-.866-1.5l9-15.588a1.04 1.04 0 0 1 1.732 0l9 15.588a1 1 0 0 1-.866 1.5Z" /></svg>
              </label>
              <label className={styles.description}>Ausrüstung
                <select className={styles.select} required name="list">
                  <option value="1">Синий</option>
                  <option value="2">Зеленый</option>
                  <option value="3">Желтый</option>
                </select>
                <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M21 20.794H3a1 1 0 0 1-.866-1.5l9-15.588a1.04 1.04 0 0 1 1.732 0l9 15.588a1 1 0 0 1-.866 1.5Z" /></svg>
              </label>
              <label className={styles.description}>Ausrüstung
                <select className={styles.select} required name="list" >
                  <option value="1">Синий</option>
                  <option value="2">Зеленый</option>
                  <option value="3">Желтый</option>
                </select>
                <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M21 20.794H3a1 1 0 0 1-.866-1.5l9-15.588a1.04 1.04 0 0 1 1.732 0l9 15.588a1 1 0 0 1-.866 1.5Z" /></svg>
              </label>
                <div className={styles.position}>
                  <p className={styles.description}>{CardText}</p>
                  <p className={styles.description}>{CardText}</p>
                </div>
              </div>
              <div className={styles.form}>
              <label className={styles.description} for="unterbrustumfang">Unterbrustumfang
                <input className={styles.input} type="text" id="unterbrustumfang" name="unterbrustumfang" placeholder="Umfang in Zentimetern" />
              </label>

              <label className={styles.description} for="brustumfang">Brustumfang
                <input className={styles.input} type="text" id="brustumfang" name="brustumfang" placeholder="Umfang in Zentimetern" />
              </label>
              
              <label className={styles.description} for="brustumfang">Hüftumfang
                <input className={styles.input} type="text" id="brustumfang" name="brustumfang" placeholder="Umfang in Zentimetern" />
              </label>

              <label className={styles.description} for="taillenumfang">Taillenumfang
                <input className={styles.input} type="text" id="taillenumfang" name="taillenumfang" placeholder="Umfang in Zentimetern" />
              </label>
              
                <button className={styles.btn} onClick={handleClick}>In den warenkorb</button>
              </div>
            </form>
            <div className={styles.position_mob}>
              <p className={styles.description}>{CardText}</p>
              <p className={styles.description}>{CardText}</p>
            </div>
        </div>
      </div>
      </div>
  </>
  )
}