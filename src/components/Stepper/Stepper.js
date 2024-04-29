"use client";

import VariantCard from "./VariantCard/VariantCard";
import { useState, useEffect } from "react";
import Image from "next/image";
import previous from "@/assets/previous-icon.png";
import Accessory from "./Accessory/Accessory";
import { createLead } from "../../app/api/actions";
import styles from "./Stepper.module.scss";

const Stepper = ({ name, price, variants, accessories }) => {
  const [selected, setSelected] = useState({});
  const [step, setStep] = useState(1);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  //Guardamos la variante seleccionada
  const handleVariant = (item) => {
    setSelected(item);
  };

  //Intento de llamar a la función creatLead en app/api/actions.js
  const submitForm = () => {
    const data = {
      uuid: selected.uuid,
      //accessories: [],
      contact: {
        firstname: firstName,
        lastname: lastName,
        email: email,
        phone: phone,
        finance: false,
        trade: false,
      },
    };
    //createLead(JSON.stringify(data));
    // try {
    //   const token = "qwertyuiopasdfghjklzxcvbnm1234";
    //   await fetch(
    //     "https://nathan.tasa.develop.simplitec.io/webhook/simplimuv/createlead",
    //     {
    //       method: "POST",
    //       headers: {
    //         Authorization: `Bearer ${token}`,
    //       },
    //       body: JSON.stringify(data),
    //     }
    //   ).then((response) => console.log(response.json()));
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <div>
      {step != 1 && (
        <div className={styles.previous} onClick={() => setStep(step - 1)}>
          <Image src={previous} height={17} alt="Previous icon" /> Volver
        </div>
      )}
      <h1 className={styles.title}>{name}</h1>
      <div className={styles.price}>
        {`$${price.toLocaleString("es-AR")}`}
        <span>OR</span>
        {`$${Math.round(price / 24)} Monthly for 24 mon.*`}
        {}
      </div>
      <div className={styles.divider}></div>
      {step === 1 && (
        <div className={styles.variants}>
          <h2 className={styles.variantsTitle}>Elegí tu versión</h2>
          {variants.map((item) => (
            <VariantCard
              variant={item}
              key={item.uuid}
              active={selected.uuid === item.uuid}
              handleVariant={handleVariant}
            />
          ))}
          <div className={styles.divider}></div>
          <div className={styles.accessories}>
            <h2>Agregá accesorios</h2>
            <div className={styles.divider}></div>
            <ul>
              {accessories.map((item) => (
                <li key={item.uuid}>
                  <Accessory
                    name={item.name}
                    price={item.variants[0].prices[0]}
                  />
                </li>
              ))}
            </ul>
          </div>
          <button
            className={[
              styles.next,
              Object.keys(selected).length === 0 && styles.disabled,
            ].join(" ")}
            onClick={() => setStep(2)}
            disabled={Object.keys(selected).length === 0}
          >
            Siguiente
          </button>
        </div>
      )}
      {step === 2 && (
        <div className={styles.checkout}>
          <h2>Detalle de la cotización</h2>
          <ul>
            {selected.details.features.slice(0, 2).map((item, index) => (
              <li key={index}>{item.value}</li>
            ))}
          </ul>
          <div className={styles.priceDetails}>
            <div className={styles.priceItem}>
              <div className={styles.label}>Precio</div>
              <div className={styles.amount}>{`${
                selected.prices[0].currency
              } ${selected.prices[0].amount.toLocaleString("es-AR")}`}</div>
            </div>
            <div className={styles.priceItem}>
              <div className={styles.label}>Precio de Reserva</div>
              <div className={styles.amount}>ARS 60.000</div>
            </div>
          </div>
          <button className={styles.next} onClick={() => setStep(3)}>
            Reservar
          </button>
        </div>
      )}
      {step === 3 && (
        <form action={submitForm}>
          <div className={styles.contacto}>
            <div>
              <label>Nombre*</label>
              <input
                type="text"
                name="firstName"
                required
                onChange={(e) => setFirstName(e.target.value)}
              ></input>
            </div>
            <div>
              <label>Apellido*</label>
              <input
                type="text"
                name="lastName"
                required
                onChange={(e) => setLastName(e.target.value)}
              ></input>
            </div>
            <div>
              <label>E-mail*</label>
              <input
                type="email"
                name="email"
                required
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>
            <div>
              <label>Teléfono*</label>
              <input
                type="tel"
                name="phone"
                required
                onChange={(e) => setPhone(e.target.value)}
              ></input>
            </div>
          </div>
          <button type="submit" className={styles.next}>
            Solicitar cotización
          </button>
        </form>
      )}
    </div>
  );
};

export default Stepper;
