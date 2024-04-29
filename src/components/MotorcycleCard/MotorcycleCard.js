"use client";

import Image from "next/image";
import Link from "next/link";
import engineIcon from "@/assets/engine-icon.png";
import location from "@/assets/location-icon.png";
import categoryIcon from "@/assets/category-icon.png";
import heightIcon from "@/assets/height-icon.png";

import styles from "./MotorcycleCard.module.scss";

const MotorcycleCard = ({ product }) => {
  return (
    <Link
      href={`/motorcycles/${product.uuid}`}
      //as={`/motorcycles/${product.slug}`}
      className={styles.container}
    >
      <Image
        className={styles.image}
        src={product.variants[0].images[0].formats.thumbnail.url}
        alt="Product thumbnail"
        width={225}
        height={128}
      />
      <div className={styles.variant}>
        <span></span>
        {product.variants[0].name}
      </div>
      <h2>{product.name}</h2>
      <div className={styles.price}>
        <span>{product.variants[0].prices[0].currency} </span>$
        {product.variants[0].prices[0].amount.toLocaleString("es-AR")}
      </div>
      <div className={styles.seller}>
        <Image src={location} width={18} height={14} alt="Location icon" />
        {product.seller.name}
      </div>
      <div className={styles.info}>
        <div className={styles.spec}>
          <Image src={engineIcon} width={21} alt="Engine icon" />
          <span>Motor</span>
          {product.variants[0].details.motors[0].value}
        </div>
        <div className={styles.spec}>
          <Image src={categoryIcon} width={21} alt="Category icon" />
          <span>Categoría</span>
          {product.categories[0].name}
        </div>
        <div className={styles.spec}>
          <Image src={heightIcon} width={21} alt="Height icon" />
          <span>Altura</span>
          60cm
        </div>
      </div>
    </Link>
  );
};

export default MotorcycleCard;
