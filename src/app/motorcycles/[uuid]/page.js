import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import Stepper from "@/components/Stepper/Stepper";
import styles from "./page.module.scss";

async function getData(uuid) {
  const token = "qwertyuiopasdfghjklzxcvbnm1234";
  const res = await fetch(
    `https://nathan.tasa.develop.simplitec.io/webhook/simplimuv/products/motorcycles?uuid=${uuid}`,
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return res.json();
}

async function getAccessories() {
  const token = "qwertyuiopasdfghjklzxcvbnm1234";
  const res = await fetch(
    "https://nathan.tasa.develop.simplitec.io/webhook/simplimuv/products/accessories",
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return res.json();
}

//Intenté hacer el POST del form desde la página padre para evitar el error de CORS pero no tuve éxito

// function onSubmit(data) {
//   try {
//     const token = "qwertyuiopasdfghjklzxcvbnm1234";
//     fetch(
//       "https://nathan.tasa.develop.simplitec.io/webhook/simplimuv/createlead",
//       {
//         method: "POST",
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify(data),
//       }
//     ).then((response) => console.log(response));
//   } catch (error) {
//     console.log(error);
//   }
// }

export default async function ProductDetail({ params }) {
  const product = Object.assign({}, ...(await getData(params.uuid)));
  const accessories = await getAccessories();

  return (
    <div className={styles.container}>
      <div className={styles.product}>
        <div className={styles.left}>
          <Breadcrumbs />
          <div className={styles.slider}>
            <Image
              src={product.variants[0].images[0].url}
              width={635}
              height={307}
              alt="Product image"
            />
          </div>
          <div className={styles.features}>
            <h2 className={styles.subtitle}>{product.name}</h2>
            <ul>
              {product.variants[0].details.features.map((item, index) => (
                <li key={index}>{item.value}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.right}>
          <Stepper
            name={product.name}
            price={product.variants[0].prices[0].amount}
            variants={product.variants}
            accessories={accessories}
            // createLead={onSubmit}
          />
        </div>
      </div>
      <div className={styles.disclaimer}>
        IMAGEN NO CONTRACTUAL. Los precios publicados para los productos son
        orientativos no contractuales.
      </div>
    </div>
  );
}
