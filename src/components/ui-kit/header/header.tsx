import React from "react"
import styles from './header.module.css'
import { ThemeButton } from "../../themeButton/themeButton"

export function HeaderUI() {
  return (
  <header className={styles.header}>
    <nav>
      <li className={styles.list}>
        <ul className={styles.ul}>
         <a className={styles.element} href="#">Калькулятор</a>
        </ul>
        <ul className={styles.ul}>
         <a className={styles.element} href="">Интеграл</a>
        </ul>
        <ul className={styles.ul}>
          <a className={styles.element} href="">Задачи</a>
        </ul>
      </li>
    </nav>
    <ThemeButton />
  </header>
)}