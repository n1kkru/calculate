import React from "react";
import styles from "./header.module.css";
import { ThemeButton } from "../../themeButton/themeButton";

export function HeaderUI() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <li className={styles.list}>
          <ul className={styles.ul}>
            <a className={styles.element} href="#">
              <div className={styles.calc} />
            </a>
          </ul>
          <ul className={styles.ul}>
            <a className={styles.element} href="">
              <div className={styles.integral} />
            </a>
          </ul>
          <ul className={styles.ul}>
            <a className={styles.element} href="">
              <div className={styles.task} />
            </a>
          </ul>
        </li>
        <ThemeButton className={styles.themeButton} />
      </nav>
    </header>
  );
}
