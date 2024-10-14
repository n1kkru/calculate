import { FC } from "react";
import { Preloader } from "../../components/ui-kit/preloader";
import styles from "./tasks.module.css";

export const Tasks : FC = () => {

  return (
    <>
      {false ? (
        <Preloader />
      ) : (
        <main className={styles.main}>

        </main>
      )}
    </>
  );
}