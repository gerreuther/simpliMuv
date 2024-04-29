"use client";

import { useState } from "react";
import styles from "./Filters.module.scss";

const Filters = ({ onSort }) => {
  const [selectedSort, setSelectedSort] = useState("Relevancia"); //con este estado se podría cambiar el label del orden seleccionado
  const [showSortOptions, setShowSortOptions] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.options}>
        <div className={styles.filters}>
          <div className={styles.filterItem}>Categorías</div>
          <div className={styles.filterItem}>Precio</div>
        </div>

        <div
          className={styles.filterItem}
          onClick={() => setShowSortOptions(!showSortOptions)}
        >
          Ordenar por: <span>{selectedSort}</span>
          {showSortOptions && (
            <div
              className={[styles.optionsContainer, styles.filterItem].join(" ")}
            >
              <ul>
                <li onClick={() => onSort("relevancia")}>Relevancia</li>
                <li onClick={() => onSort("mayor")}>Mayor precio</li>
                <li onClick={() => onSort("menor")}>Menor precio</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Filters;
