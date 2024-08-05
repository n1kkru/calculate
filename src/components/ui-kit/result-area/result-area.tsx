import { ReactElement } from "react";
import styles from "./result-area.module.css";

export interface TResultAreaUI {
  lastResult: string;
  history: string[];
  className?: string;
}

export function ResultAreaUI({
  lastResult,
  history,
  className,
}: TResultAreaUI): ReactElement {
  return (
    <div className={styles.area}>
      {/* <p className={styles.lastResult}>{lastResult}</p> */}
      {history.map((element) => <p className={styles.history}>{element}</p>)}
    </div>
  );
}
