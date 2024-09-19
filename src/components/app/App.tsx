import styles from "./App.module.css";
import { Header } from "../header/header";
import { SimpleCalculator } from "../../pages";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <Routes>
        <Route path="/" element={<SimpleCalculator />} />
      </Routes>
    </div>
  );
};
export default App;
