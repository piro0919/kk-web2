import React, { MouseEventHandler, ReactNode } from "react";
import * as styles from "./style.module.scss";

export type ButtonProps = {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: "submit";
};

function Button({ children, onClick, type }: ButtonProps): JSX.Element {
  return (
    <button className={styles.button} onClick={onClick} type={type}>
      {children}
    </button>
  );
}

export default Button;
