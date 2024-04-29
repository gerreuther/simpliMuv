"use client";

import Image from "next/image";
import Link from "next/link";
import engineIcon from "@/assets/engine-icon.png";
import location from "@/assets/location-icon.png";
import categoryIcon from "@/assets/category-icon.png";
import heightIcon from "@/assets/height-icon.png";

import styles from "./AccessoryCard.module.scss";

const AccessoryCard = ({ product }) => {
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

      <h2>{product.name}</h2>
      <div className={styles.price}>
        <span>{product.variants[0].prices[0].currency} </span>$
        {product.variants[0].prices[0].amount.toLocaleString("es-AR")}
      </div>
    </Link>
  );
};

export default AccessoryCard;
