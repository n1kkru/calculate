import { Keyboard } from '../../components/keyboard/keyboard';
import { Button } from '../../components/ui-kit/button/button';

import { Preloader } from '../../components/ui-kit/preloader';
import styles from './simple-calculator.module.css';
import { FC } from 'react';

export const SimpleCalculator: FC = () => {
  /** TODO: взять переменную из стора */
  const isIngredientsLoading = false;
  // const isIngredientsLoadin = useSelector((state) => state.burgerReducers.isLoading); 

  return (
    <>
      {isIngredientsLoading ? (
        <Preloader />
      ) : (
        <main>
          <Keyboard/>
        </main>
      )}
    </>
  );
};