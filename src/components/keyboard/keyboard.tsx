import { FC, useState } from "react";
import { KeyboardUI } from "../ui-kit/keyboard/keyboard";
import { TOperation, TResult, isOperation } from "../../utils/type"
import { calculate } from "../../utils/math";

export interface TKeyboard {
	setResult: (value : string) => void;
}

export const Keyboard : FC<TKeyboard> = ({setResult}) => {

  const [first, setFirst] = useState<number>(0);
  const [second, setSecond] = useState<number>(0);
  const [operation, setOperation] = useState<TOperation | null>(null);

  const clearValues = (res?: TResult) => {
    if (typeof res === "number") {
      setFirst(res);
    }
    else {
      setFirst(0);
    }
    setSecond(0);
    setOperation(null);
  }

  const clickKey = (value: any) => {   
    if (!operation && (!isNaN(value) || value === '.')) {
      setFirst(first + value);
      console.log('first', first);
    }
    else if (isOperation(value)) {
      setOperation(value);
      console.log('oper');
    }
    else if (operation && (!isNaN(value) || value === '.')) {
      setSecond(second+value);
      console.log('second', second);
    }
    else if (first && second && operation && value === '=') {
      setResult(calculate({first, second, operation}));
      clearValues(calculate({first, second, operation}))
      console.log(Number(first), Number(second), operation);
    }
    else if (value === "C") {
      clearValues();
      console.log("все чисто!", first, second, operation);

    }
  }

  return <KeyboardUI clickKey={clickKey}/>
}