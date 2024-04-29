"use client";

import styles from "./VariantCard.module.scss";

const VariantCard = ({ variant, handleVariant, active }) => {
  return (
    <div
      className={[styles.container, active ? styles.active : ""].join(" ")}
      onClick={() => handleVariant(variant)}
    >
      <div className={styles.data}>
        <div className={styles.variantTitle}>
          <span>{variant.name}</span>
          <span className={styles.color}></span>
        </div>
        <ul>
          {variant.details.features.slice(0, 2).map((item, index) => (
            <li key={index}>{item.value}</li>
          ))}
        </ul>
      </div>
      <div
        className={styles.price}
      >{`$${variant.prices[0].amount.toLocaleString("es-AR")}`}</div>
    </div>
  );
};

export default VariantCard;
