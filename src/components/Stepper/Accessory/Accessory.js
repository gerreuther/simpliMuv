import styles from "./Accessory.module.scss";

const Accessory = ({ name, price }) => {
  return (
    <div className={styles.container}>
      <div className={styles.name}>{name}</div>
      <div className={styles.price}>
        {price.currency} {price.amount.toLocaleString("es-AR")}
      </div>
    </div>
  );
};

export default Accessory;
