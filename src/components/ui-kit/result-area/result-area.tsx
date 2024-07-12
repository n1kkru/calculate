import { ReactElement } from "react";
import { TResult } from "../../../utils/type";
import styles from './result-area.module.css'

export interface TResultAreaUI {
  lastResult: TResult;
  className?: string,
}

export function ResultAreaUI({lastResult, className} : TResultAreaUI ) : ReactElement {
	return (
    <div className={styles.area}>
      <p>{lastResult}</p>
    </div>)
}