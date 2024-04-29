import Filters from "@/components/Filters/Filters";
import AccessoryCard from "@/components/AccessoryCard/AccessoryCard";
import Grid from "@/components/Grid/Grid";
import styles from "./page.module.scss";

async function getData() {
  const token = "qwertyuiopasdfghjklzxcvbnm1234";
  const res = await fetch(
    "https://nathan.tasa.develop.simplitec.io/webhook/simplimuv/products/accessories",
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return res.json();
}

export default async function Accessories() {
  const data = await getData();

  return (
    <div>
      <div className={styles.title}>
        <h1>ACCESORIOS</h1>
      </div>
      <Filters title="ACCESSORIOS" />
      <div className={styles.container}>
        <Grid products={data} type="accessories" />
      </div>
    </div>
  );
}
