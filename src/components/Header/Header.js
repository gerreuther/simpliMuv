"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo-header.png";
import menu from "@/assets/menu-icon.png";
import close from "@/assets/close-icon.png";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

import cart from "@/assets/shopping-cart.png";
import styles from "./Header.module.scss";

const Header = () => {
  const [width, setWidth] = useState(window?.innerWidth);
  const [showMenu, setShowMenu] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className={styles.container}>
      {width > 768 ? (
        <nav className={styles.content}>
          <Link href="/">
            <Image src={logo} height={30} alt="Royal Enfield logo" />
          </Link>

          <div className={styles.tabs}>
            <Link
              href="/motorcycles"
              className={pathname.includes("/motorcycles") ? styles.active : ""}
            >
              Motos
            </Link>
            <Link
              href="/accessories"
              className={pathname.includes("/accessories") ? styles.active : ""}
            >
              Accesorios
            </Link>
            <Link href="https://simplimuv.com">SimpliMuv</Link>
          </div>
          <div className={styles.cart}>
            <Image src={cart} width={24} alt="shopping-cart icon" />
          </div>
        </nav>
      ) : (
        <nav className={styles.content}>
          <Link href="/">
            <Image src={logo} height={30} alt="Royal Enfield logo" />
          </Link>

          <div className={styles.toggle} onClick={() => setShowMenu(!showMenu)}>
            <Image src={showMenu ? close : menu} alt="Menu icon" width={16} />
          </div>
        </nav>
      )}
      {showMenu && (
        <div className={styles.mobileMenu}>
          <ul>
            <li>
              <Link href="/" onClick={() => setShowMenu(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/motorcycles" onClick={() => setShowMenu(false)}>
                Motos
              </Link>
            </li>
            <li>
              <Link href="/accessories" onClick={() => setShowMenu(false)}>
                Accesorios
              </Link>
            </li>
          </ul>
          <div className={styles.divider}></div>
          <div></div>
        </div>
      )}
    </header>
  );
};

export default Header;
