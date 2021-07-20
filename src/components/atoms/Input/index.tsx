import React, { ChangeEventHandler, forwardRef, Ref } from "react";
import * as styles from "./style.module.scss";

export type InputProps = {
  hasError?: boolean;
  name: string;
  onBlur: ChangeEventHandler<HTMLInputElement>;
  onChange: ChangeEventHandler<HTMLInputElement>;
  ref: Ref<HTMLInputElement>;
  type?: "email";
};

const Input = forwardRef<HTMLInputElement, Omit<InputProps, "ref">>(
  function input(
    { hasError, name, onBlur, onChange, type }: Omit<InputProps, "ref">,
    ref
  ): JSX.Element {
    return (
      <input
        className={`${styles.input} ${hasError ? styles.error : ""}`}
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        ref={ref}
        type={type}
      />
    );
  }
);

export default Input;
