import { TCalculate, TMathFunction } from "./type";

export const addition = ({ first, second }: TMathFunction): number => first + second;
export const substraction = ({ first, second }: TMathFunction): number => first - second;
export const multyplication = ({ first, second }: TMathFunction): number => first * second;
export const division = ({ first, second }: TMathFunction): number | string => {
  if (second !== 0) return first / second;
  else return "Error";
};

export function calculate({ first, second, operation }: TCalculate) : string {
  let result = '';

  switch (operation) {
    case "+":
      first = Number(first);
      second = Number(second);
      result = String(addition({ first, second }));
      break;

    case "-":
      result = String(substraction({ first, second }));
      break;

    case "*":
      result = String(multyplication({ first, second }));
      break;

    case "/":
      result = String(division({ first, second }));
      break;

    default:
      break;
  }
  return result;
}
