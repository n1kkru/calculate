import { FC, useState } from "react";
import { KeyboardUI } from "../ui-kit/keyboard/keyboard";
import { TOperation, TResult, isOperation } from "../../utils/type"
import { calculate } from "../../utils/math";

export interface TKeyboard {
	setResult: (value : TResult) => void;
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
    if (!operation && (!isNaN(value) || value === ',')) {

      setFirst(Number(first+value));
      console.log(1);
    }
    else if (isOperation(value)) {
      setOperation(value);
      console.log('oper');
    }
    else if (operation && (!isNaN(value) || value === ',')) {
      setSecond(Number(second+value));
      console.log(2);
    }
    else if (first && second && operation && value === '=') {
      setResult(calculate({first, second, operation}));
      clearValues(calculate({first, second, operation}))
      console.log(first, second, operation);
    }
    else if (value === "C") {
      clearValues()
    }
  }

  return <KeyboardUI clickKey={clickKey}/>
}