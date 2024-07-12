import { Keyboard } from '../../components/keyboard/keyboard';
import { ResultArea } from '../../components/result-area/result-area';
import { Button } from '../../components/ui-kit/button/button';

import { Preloader } from '../../components/ui-kit/preloader';
import { TResult } from '../../utils/type';
import styles from './simple-calculator.module.css';
import { FC, useState } from 'react';

export const SimpleCalculator: FC = () => {
  /** TODO: взять переменную из стора */
  const isIngredientsLoading = false;
  // const isIngredientsLoadin = useSelector((state) => state.burgerReducers.isLoading); 
  const [result, setResult] = useState<TResult>('');

  return (
    <>
      {isIngredientsLoading ? (
        <Preloader />
      ) : (
        <main className={styles.main}>
          <Keyboard setResult={setResult}/>
          <ResultArea result={result}/>
        </main>
      )}
    </>
  );
};