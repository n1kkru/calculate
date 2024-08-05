import { FC, useEffect, useState } from "react";
import { KeyboardUI } from "../ui-kit/keyboard/keyboard";
import { TOperation, TResult, isOperation } from "../../utils/type"
import { calculate } from "../../utils/math";

export interface TKeyboard {
  res: string;
	setResult: (value : string) => void;
}

export const Keyboard : FC<TKeyboard> = ({res, setResult}) => {

  const [first, setFirst] = useState<number | null>(0);
  const [second, setSecond] = useState<number>(0);
  const [operation, setOperation] = useState<TOperation | null>(null);

  const clearValues = (res?: TResult) => {
    if (res) {
      console.log('set')
      setFirst(Number(res));
    }
    else {
      setFirst(0);
    }
    setSecond(0);
    setOperation(null);
  }

  const clickKey = (value: any) => {    
    if (!second && !operation && (!isNaN(value) || value === '.')) {
      setFirst(first + value);
      // console.log('first', first);
    }
    else if (!second && isOperation(value)) {
      setOperation(value);
      console.log('oper', !second);
    }
    else if (operation && (!isNaN(value) || value === '.')) {
      setSecond(second+value);
      // console.log('second', second);
    }
    else if (first !== null && second && operation && (value === '=' || value === 'Enter')) {
      setResult(calculate({first, second, operation}));
      // clearValues(calculate({first, second, operation}));
      clearValues();
      console.log(Number(first), Number(second), operation);
    }
    else if (value === "C") {
      clearValues();
      console.log("все чисто!", first, second, operation);
    }
  }

  const handleEsc = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const value : any = e.key;
    
    if (!second && !operation && (!isNaN(value) || value === '.')) setFirst(first + value);
    else if (!second && isOperation(value)) setOperation(value);
    else if (operation && (!isNaN(value) || value === '.')) setSecond(second+value);
    else if (first !== null && second && operation && (value === '=' || value === 'Enter')) {
      setResult(calculate({first, second, operation}));
      clearValues();
    }
    else if (value === "C") clearValues();
  };


  return <KeyboardUI clickKey={clickKey} handlerKey={handleEsc}/>
}