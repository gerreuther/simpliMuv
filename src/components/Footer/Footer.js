import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo-header.png";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.container}>
      <footer>
        <Image src={logo} width={148} alt="Royal Enfield footer logo" />
        <div className={styles.divider}></div>
        <div className={styles.links}>
          <div className={styles.flexItem}>
            <ul>
              <li>Shop</li>
              <li>
                <Link href="/accessories">Accesorios</Link>
              </li>
              <li>
                <Link href="#">Indumentaria</Link>
              </li>
            </ul>
          </div>
          <div className={styles.flexItem}>
            <ul>
              <li>Motos</li>
              <li>Bonneville T120</li>
              <li>Meteor 350</li>
              <li>Heritage Classic</li>
              <li>Street Bob 114</li>
            </ul>
          </div>
          <div className={styles.flexItem}>
            <ul>
              <li>Dirección</li>
              <li>Av. Del Libertador 3304, Vicente López, 1637, Argentina</li>
              <li>info@royalenfield.com</li>
              <li>2938749238</li>
            </ul>
          </div>
          <div className={styles.flexItem}>
            <ul>
              <li>Sobre nosotros</li>
              <li>Contactanos</li>
              <li>
                <div></div>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.termsContainer}>
          <div className={styles.terms}>
            <Link href="#">Defensa del consumidor</Link>
            <span>|</span>
            <Link href="#">Términos y condiciones</Link>
            <span>|</span>
            <Link href="#">Politica de privacidad</Link>
            <span>|</span>
            <Link href="#">Sitemap</Link>
          </div>
          <div className={styles.copyright}>© 2023 SimpliMuv</div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
