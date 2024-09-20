import { ReactElement } from "react";
import styles from "./result-area.module.css";

export interface TResultAreaUI {
  tempValues: string;
  history: string[];
  className?: string;
}

export function ResultAreaUI({
  tempValues,
  history,
  className,
}: TResultAreaUI): ReactElement {
  return (
    <>
      <div>{tempValues}</div>
      <div className={styles.area}>
        {history.map((element) => (
          <p className={styles.history}>{element}</p>
        ))}
      </div>
    </>
  );
}
