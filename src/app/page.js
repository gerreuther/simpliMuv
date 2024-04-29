import Image from "next/image";
import slide1 from "@/assets/banner.webp";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div>
      <div className={styles.sliderContainer}>
        <div>
          <Image src={slide1} alt="Home banner" />
        </div>
      </div>
    </div>
  );
}
