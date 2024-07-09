import { FC, useState } from "react";
import { KeyboardUI } from "../ui-kit/keyboard/keyboard";
import { TOperation, isOperation } from "../../utils/type"
import { calculate } from "../../utils/math";

type ButtonType = number | null

export const Keyboard : FC = () => {

  const [first, setFirst] = useState<ButtonType>(null);
  const [second, setSecond] = useState<ButtonType>(null);
  const [operation, setOperation] = useState<TOperation | null>(null);


  const clickKey = (value: any) => {   
    if (!first && (!isNaN(value) || value === ',')) {
      setFirst(value)
      console.log('set1', value);
    }
    else if (first && isOperation(value)) {
      setOperation(value)
      console.log('setOPer', value);
    }
    else if (operation && (!isNaN(value) || value === ',')) {
      setSecond(value)
      console.log('set2', value);
    }
    else if (first && second && operation && value === '=') {
      console.log(calculate({first, second, operation}));

    }
  }


  return <KeyboardUI clickKey={clickKey}/>
}