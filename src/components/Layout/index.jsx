// components/Layout/index.jsx
import React from "react";
import Header from "../Header";
import styles from "./Layout.module.css";
import { useLocation } from "react-router-dom";

export default function Layout({ children }) {
  const { pathname } = useLocation();
  const fullBleed = pathname === "/"; // landing only

  return (
    <div className={`${styles.shell} ${fullBleed ? styles.shellBleed : ""}`}>
      <Header overlay={fullBleed} />
      <main className={`${styles.main} ${fullBleed ? styles.fullBleed : ""}`}>
        {children}
      </main>
      {!fullBleed && (
        <footer className={styles.footer}>
          <p>© {new Date().getFullYear()} petFound · Built with ❤️</p>
        </footer>
      )}
    </div>
  );
}
