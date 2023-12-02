"use client";
import Link from "next/link";
import styles from "./nav.module.scss"
import { useState } from "react";

import {services, delivery} from "@/shared/list"

export default function Nav() {
  const [onHover, setOnHover] = useState(false);
  const [onHoverDelivery, setOnHoverDelivery] = useState(false);



  const handleClickOnMenu = () => {
    setOnHover(!onHover);
  };

  const handleClickOnMenuDelivery = () => {
    setOnHoverDelivery(!onHoverDelivery);
  };

  return (
    <>
    <ul className={styles.list}>
      <li className={styles.link}><a href="/">HAUPTSEITE</a></li>
      <li className={styles.link}><a href="/">ZERTIFIKAT</a></li>
        <li style={{ position: "relative" }} className={styles.link}
          onClick={handleClickOnMenu}
          onMouseOver={() => setOnHover(true)}>
        <div className={styles.adaptive}>
          <p>KATALOG</p>
          <svg className={styles.triangle} xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24"><path fill="currentColor" d="M21 20.794H3a1 1 0 0 1-.866-1.5l9-15.588a1.04 1.04 0 0 1 1.732 0l9 15.588a1 1 0 0 1-.866 1.5Z" /></svg>
        </div>
        {onHover && (
            <ul className={styles.services} onMouseLeave={() => setOnHover(false)}>
              <li>
                <svg className={styles.services_icon} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M21 20.794H3a1 1 0 0 1-.866-1.5l9-15.588a1.04 1.04 0 0 1 1.732 0l9 15.588a1 1 0 0 1-.866 1.5Z" /></svg>
                </li>
              {services.map((item, id) => (
                <li key={id} className={styles.link}>
                  <Link href={item.link}>{item.title}</Link>
                </li>
              ))}
            </ul>
        )}
      </li>
        <li className={styles.link}><a href="/">GRÖßENTABELLE</a></li>
        
        <li className={styles.link} style={{ position: "relative" }}
          onClick={handleClickOnMenuDelivery}
          onMouseOver={() => setOnHoverDelivery(true)}>
          <div className={styles.adaptive}>
            <p>BESTELLBEDINGUNGEN</p>
            <svg className={styles.triangle} xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24"><path fill="currentColor" d="M21 20.794H3a1 1 0 0 1-.866-1.5l9-15.588a1.04 1.04 0 0 1 1.732 0l9 15.588a1 1 0 0 1-.866 1.5Z" /></svg>
          </div>
          {onHoverDelivery && (
            <ul className={styles.services} style={{ left: "0px" }} onMouseLeave={() => setOnHoverDelivery(false)}>
              <li>
                <svg className={styles.services_icon} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M21 20.794H3a1 1 0 0 1-.866-1.5l9-15.588a1.04 1.04 0 0 1 1.732 0l9 15.588a1 1 0 0 1-.866 1.5Z" /></svg>
              </li>
              {delivery.map((item, id) => (
                <li key={id} className={styles.link}>
                  <Link href={item.link}>{item.title}</Link>
                </li>
              ))}
            </ul>
          )}
      </li>
      <li className={styles.link}><a href="brand-concept">MARKENKONZEPT</a></li>
    </ul>
    </>
  );
}
