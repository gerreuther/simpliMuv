import Filters from "@/components/Filters/Filters";
import Grid from "@/components/Grid/Grid";
import styles from "./page.module.scss";

async function getData() {
  const token = "qwertyuiopasdfghjklzxcvbnm1234";
  const res = await fetch(
    "https://nathan.tasa.develop.simplitec.io/webhook/simplimuv/products/motorcycles",
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return res.json();
}

export default async function Motorcycles() {
  const data = await getData();

  return (
    <div>
      <div className={styles.title}>
        <h1>MOTOS</h1>
      </div>
      <div className={styles.container}>
        <Grid products={data} type="motorcycles" />
      </div>
    </div>
  );
}
