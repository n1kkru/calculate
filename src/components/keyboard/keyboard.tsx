import { FC, useState } from "react";
import { KeyboardUI } from "../ui-kit/keyboard/keyboard";
import { TOperation, TResult, isOperation } from "../../utils/type"
import { calculate } from "../../utils/math";

export const Keyboard : FC = () => {

  const [first, setFirst] = useState<number>(0);
  const [second, setSecond] = useState<number>(0);
  const [operation, setOperation] = useState<TOperation | null>(null);
  const [result, setResult] = useState<TResult>('')

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
      console.log(first, second, operation);
      console.log(result);
    }
  }


  return <KeyboardUI clickKey={clickKey}/>
}