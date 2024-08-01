import { FC, useEffect, useState } from "react";
import { ResultAreaUI } from "../ui-kit/result-area/result-area";
import { useDispatch, useSelector } from "../../store/store";
import { addResult, updateHistory } from "../../store/silce";

interface TResultArea {
  result: string;
}

export const ResultArea: FC<TResultArea> = ({ result }) => {
  const dispatch = useDispatch();
  const resultsList = useSelector((state) => state.resultReducer.history);
  const reversedList = [...resultsList].reverse();

  useEffect(() => {
    dispatch(updateHistory(result));
  }, [result]);

  console.log("result", result);
  console.log("resultsList", resultsList);

  return <ResultAreaUI lastResult={result} history={reversedList} />;
};
