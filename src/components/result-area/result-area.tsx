import { FC } from "react"
import { ResultAreaUI } from "../ui-kit/result-area/result-area"
import { TResult } from "../../utils/type"

interface TResultArea {
	result: TResult;
}

export const ResultArea : FC<TResultArea> = ({result}) => {
  return <ResultAreaUI lastResult={result} />
}