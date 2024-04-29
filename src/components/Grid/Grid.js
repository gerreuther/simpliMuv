"use client";

import { useState } from "react";
import MotorcycleCard from "../MotorcycleCard/MotorcycleCard";
import AccessoryCard from "../AccessoryCard/AccessoryCard";
import Filters from "../Filters/Filters";
import styles from "./Grid.module.scss";

const Grid = ({ products, type }) => {
  const [currentList, setCurrentList] = useState(products);

  const handleSort = (sort) => {
    const newArray = [...products];
    if (sort === "mayor") {
      newArray.sort(
        (a, b) =>
          b.variants[0].prices[0].amount - a.variants[0].prices[0].amount
      );
    } else if (sort === "menor") {
      newArray.sort(
        (a, b) =>
          a.variants[0].prices[0].amount - b.variants[0].prices[0].amount
      );
    }
    setCurrentList(newArray);
  };

  return (
    <>
      <Filters onSort={handleSort} />
      <div className={styles.grid}>
        {currentList.map((item) =>
          type === "accessories" ? (
            <AccessoryCard product={item} key={item.uuid} />
          ) : (
            <MotorcycleCard product={item} key={item.uuid} />
          )
        )}
      </div>
    </>
  );
};

export default Grid;
