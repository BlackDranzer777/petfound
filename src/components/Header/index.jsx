import React, { forwardRef, useState } from "react";
import styles from "./Header.module.css";

/**
 * Enhanced header with pill-shaped design inspired by the reference
 * Color switches by changing data-theme between "light" and "dark".
 */
const Header = forwardRef(function Header(_, ref) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header ref={ref} className={styles.header} data-theme="light">
      <div className={styles.navContainer}>
        <div className={styles.navPill}>
          {/* Logo */}
          <a href="/" className={styles.logo} aria-label="petFound home">
            petFound
          </a>

          {/* Desktop Navigation */}
          <nav className={styles.desktopNav}>
            <a href="#how-it-works" className={styles.navLink}>How it works</a>
            <a href="#features" className={styles.navLink}>Features</a>
            <a href="#success-stories" className={styles.navLink}>Success Stories</a>
            <a href="#help" className={styles.navLink}>Help</a>
            <a href="#about" className={styles.navLink}>About</a>
          </nav>

          {/* CTA Buttons */}
          <div className={styles.ctaButtons}>
            <a href="/login" className={styles.loginBtn}>Log in</a>
            <a href="/signup" className={styles.signupBtn}>Sign up</a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={styles.mobileMenuBtn}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className={`${styles.hamburger} ${isMenuOpen ? styles.hamburgerOpen : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : ''}`}>
          <nav className={styles.mobileNav}>
            <a href="#how-it-works" className={styles.mobileNavLink}>How it works</a>
            <a href="#features" className={styles.mobileNavLink}>Features</a>
            <a href="#success-stories" className={styles.mobileNavLink}>Success Stories</a>
            <a href="#help" className={styles.mobileNavLink}>Help</a>
            <a href="#about" className={styles.mobileNavLink}>About</a>
          </nav>
          <div className={styles.mobileCta}>
            <a href="/login" className={styles.mobileLoginBtn}>Log in</a>
            <a href="/signup" className={styles.mobileSignupBtn}>Sign up</a>
          </div>
        </div>
      </div>
    </header>
  );
});

export default Header;