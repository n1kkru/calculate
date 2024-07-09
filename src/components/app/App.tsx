import React, { ReactNode } from 'react';
import styles from './App.module.css';
import { Header } from '../header/header';
import { SimpleCalculator } from '../../pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div className={styles.app}>
        <Header />
        <Routes>
          <Route path='/' element={<SimpleCalculator  />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
export default App;
