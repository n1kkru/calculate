import React from "react"
import styles from './header.module.css'

export function HeaderUI() {
  return (
  <header className={styles.header}>
    <nav>
      <li className={styles.list}>
        <ul>Калькулятор</ul>
        <ul>Интеграл</ul>
        <ul>Задачи</ul>
      </li>
    </nav>
  </header>
)}