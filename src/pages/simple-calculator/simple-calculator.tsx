import { Keyboard } from "../../components/keyboard/keyboard";
import { ResultArea } from "../../components/result-area/result-area";
import { Preloader } from "../../components/ui-kit/preloader";
import styles from "./simple-calculator.module.css";
import { FC, useEffect, useState } from "react";

export const SimpleCalculator: FC = () => {
  /** TODO: взять переменную из стора */
  const isIngredientsLoading = false;
  // const isIngredientsLoadin = useSelector((state) => state.burgerReducers.isLoading);
  const [result, setResult] = useState<string>("");
  const [tempValues, setTempValues] = useState<string>("");

  return (
    <>
      {isIngredientsLoading ? (
        <Preloader />
      ) : (
        <main className={styles.main}>
          <Keyboard
            res={result}
            setTempValues={setTempValues}
            setResult={setResult}
          />
          <ResultArea tempValues={tempValues} result={result} />
        </main>
      )}
    </>
  );
};
