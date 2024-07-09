export type TMathFunction = {
  first: number,
  second: number
}

export type TCalculate = TMathFunction & {
  operation: TOperation
}

export type TOperation = '*' | '-' | '+' | '/';

export function isOperation(value: any) : boolean {
  if (value === '/') return true
  if (value === '*') return true
  if (value === '-') return true
  if (value === '+') return true
  return false
}