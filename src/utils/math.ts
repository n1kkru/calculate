import { TCalculate, TMathFunction, TResult } from "./type";

export const addition = ({ first, second }: TMathFunction): number => first + second;
export const substraction = ({ first, second }: TMathFunction): number => first - second;
export const multyplication = ({ first, second }: TMathFunction): number => first * second;
export const division = ({ first, second }: TMathFunction): number | string => {
  if (second !== 0) return first / second;
  else return "Error";
};

export function calculate({ first, second, operation }: TCalculate) : TResult {
  let result = null;

  switch (operation) {
    case "+":
      result = addition({ first, second });
      break;

    case "-":
      result = substraction({ first, second });
      break;

    case "*":
      result = multyplication({ first, second });
      break;

    case "/":
      result = division({ first, second });
      break;

    default:
      break;
  }
  return result;
}
