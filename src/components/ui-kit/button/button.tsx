import { ReactNode } from "react";
import clsx from "clsx";
import styles from "./button.module.css";

export type ButtonProps = {
  className: string;
  text: string;
  onClick: (value: any) => void;
};

export const Button = ({ text, className, onClick }: ButtonProps) => {
  return (
    <button
      className={clsx(styles.button, className)}
      onClick={() => onClick(text)}
    >
      {text}
    </button>
  );
};
