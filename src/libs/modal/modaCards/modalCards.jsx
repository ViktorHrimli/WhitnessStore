"use client"
import { useState } from "react";
import styles from './modalCards.module.scss';
import { CarouselDemo } from "./caruselPhoto/carusel";


export default function ModalCards({
  setIsOpenModal,
  CardImg,
  CardTitle,
  CardText,
  CardPrice,
}) {

  const [isOpenSatz, setIsOpenSatz] = useState(false);
  const [isOpenColor, setIsOpenColor] = useState(false);
  const [isOpenAddition, setIsOpenAddition] = useState(false);

  // value
  const [satz, setSatz] = useState("");
  const [color, setColor] = useState("");
  const [addition, setSelectAddition] = useState("");

  // value size
  const [isChestCircumference, setIsChestCircumference] = useState("");
  const [isUnderbustMeasurement, setIsUnderbustMeasurement] = useState("");
  const [isHipCircumference, setIsHipCircumference] = useState("");
  const [isTaillenumfang, setIsTaillenumfang] = useState("");


  const handleInputChangeChestCircumference = (e) => {
    const inputValue = e.target.value;
    setIsChestCircumference(inputValue)
  }
  const handleInputChangeUnderbustMeasurement = (e) => {
    const inputValue = e.target.value;
    setIsUnderbustMeasurement(inputValue)
  }

  const handleInputChangeHipCircumference = (e) => {
    const inputValue = e.target.value;
    setIsHipCircumference(inputValue)
  }

  const handleInputChangeTaillenumfang = (e) => {
    const inputValue = e.target.value;
    setIsTaillenumfang(inputValue)
  }

  // open input
  const onClickSatz = () => {
    setIsOpenSatz(!isOpenSatz);
    setIsOpenColor(false);
    setIsOpenAddition(false);
  }

  const onClickColor = () => {
    setIsOpenColor(!isOpenColor);
    setIsOpenAddition(false);
    setIsOpenSatz(false);
  }

  const onClickAddition = () => {
    setIsOpenAddition(!isOpenAddition);
    setIsOpenColor(false);
    setIsOpenSatz(false);
  }

  // closed modal
  const closed = () => {
    setIsOpenModal(false);
  }

  // icon
  function Icon(props) {
    const { onClick } = props;
    return (
        <div className={styles.icon}  onClick={onClick}>
          <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"><path fill="black" d="M21 20.794H3a1 1 0 0 1-.866-1.5l9-15.588a1.04 1.04 0 0 1 1.732 0l9 15.588a1 1 0 0 1-.866 1.5Z" /></svg>
        </div>
    )
  }
  // submit
  const handleClick = (event) => {
    event.preventDefault();

    const existingData = JSON.parse(localStorage.getItem('storedItems')) || [];
    const newCardData = { 
      CardImg: CardImg,
      CardTitle: CardTitle,
      CardPrice: CardPrice,
      satz: satz,
      color: color,
      addition: addition,
      isChestCircumference: isChestCircumference,
      isUnderbustMeasurement: isUnderbustMeasurement,
      isHipCircumference: isHipCircumference,
      isTaillenumfang: isTaillenumfang,
    };
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
            
            <CarouselDemo CardImg={CardImg} />
        </div>
        <div className={styles.container_text}>
            <h3 className={styles.title}>{CardTitle}</h3>
          <p className={styles.price}>{CardPrice}€</p>

            <form action="" className={styles.form_container}>
              <div className={styles.form}>
                <div>
                <label className={styles.description}>Ausrüstung</label>
                <div style={{position: "relative", width: "100%"}}> 
                <input className={styles.select}
                  required
                  onClick={onClickSatz}
                  value={satz}
                  readOnly
                  id="satz"
                  type="text"
                  />
                    
                  <Icon onClick={onClickSatz}/>
                </div>
              </div>
                  
                  {isOpenSatz && <div className={styles.select_menu}>
                    <div className={styles.select_text} onClick={()=>{setSatz("Синий"), setIsOpenSatz(false)}}>Синий</div>
                    <div className={styles.select_text} onClick={()=>{setSatz("Зеленый"), setIsOpenSatz(false)}}>Зеленый</div>
                    <div className={styles.select_text} onClick={()=>{setSatz("Желтый"), setIsOpenSatz(false)}}>Желтый</div>
                  </div>}
                <div>
                  <label className={styles.description}>Farbe</label>
                    <div style={{position: "relative", width: "100%"}}> 
                    <input className={styles.select}
                      required
                        onClick={onClickColor}
                        value={color}
                        readOnly
                        id="color"
                        type="text"/>
                    <Icon onClick={onClickColor} />
                  </div>
                </div>
                  {isOpenColor && <div className={styles.select_menu}>
                    <div className={styles.select_text} onClick={()=>{setColor("Синий"), setIsOpenColor(false)}}>Синий</div>
                    <div className={styles.select_text} onClick={()=>{setColor("Зеленый"), setIsOpenColor(false)}}>Зеленый</div>
                    <div className={styles.select_text} onClick={()=>{setColor("Желтый"), setIsOpenColor(false)}}>Желтый</div>
                  </div>}
                  <div>
                  <label className={styles.description}>Zusatz</label>
                    <div style={{position: "relative", width: "100%"}}> 
                    <input className={styles.select}
                      required
                        value={addition}
                        readOnly
                        id="addition"
                        type="text"
                        onClick={onClickAddition} />
                      <Icon onClick={onClickAddition} />
                    </div>
                  </div>
                  {isOpenAddition && <div className={styles.select_menu}>
                    <div className={styles.select_text} onClick={()=>{setSelectAddition("Синий"), setIsOpenAddition(false)}}>Синий</div>
                    <div className={styles.select_text} onClick={()=>{setSelectAddition("Зеленый"), setIsOpenAddition(false)}}>Зеленый</div>
                    <div className={styles.select_text} onClick={()=>{setSelectAddition("Желтый"), setIsOpenAddition(false)}}>Желтый</div>
                  </div>}
                
                <div className={styles.position}>
                  <p className={styles.description}>{CardText}</p>
                  <p className={styles.description}>{CardText}</p>
                </div>
              </div>
              <div className={styles.form}>
              <label className={styles.description}>Unterbrustumfang
                  <input className={styles.input}
                    type="text"
                    id="unterbrustumfang"
                    name="unterbrustumfang"
                    placeholder="Umfang in Zentimetern"
                    onChange={handleInputChangeChestCircumference}
                  />
              </label>

              <label className={styles.description}>Brustumfang
                  <input className={styles.input}
                    type="text"
                    id="brustumfang"
                    name="brustumfang"
                    placeholder="Umfang in Zentimetern"
                    onChange={handleInputChangeUnderbustMeasurement}
                  />
              </label>
              
              <label className={styles.description}>Hüftumfang
                  <input className={styles.input}
                    type="text"
                    id="hüftumfang"
                    name="hüftumfang"
                    placeholder="Umfang in Zentimetern"
                    onChange={handleInputChangeHipCircumference}
                  />
              </label>

              <label className={styles.description}>Taillenumfang
                  <input className={styles.input}
                    type="text" id="taillenumfang"
                    name="taillenumfang"
                    placeholder="Umfang in Zentimetern"
                    onChange={handleInputChangeTaillenumfang}
                  />
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