import React, { forwardRef } from "react";
import styles from "./Header.module.css";

/**
 * Minimal header for the landing site only.
 * Color switches by changing data-theme between "light" and "dark".
 */
const Header = forwardRef(function Header(_, ref) {
  return (
    <header ref={ref} className={styles.header} data-theme="light">
      <a href="/" className={styles.logo} aria-label="petFound home">
        petFound
      </a>
    </header>
  );
});

export default Header;
