import React, { FormEventHandler, forwardRef, Ref } from "react";
import * as styles from "./style.module.scss";

export type TextareaProps = {
  hasError?: boolean;
  name: string;
  onBlur: FormEventHandler<HTMLTextAreaElement>;
  onChange: FormEventHandler<HTMLTextAreaElement>;
  ref: Ref<HTMLTextAreaElement>;
};

const Textarea = forwardRef<HTMLTextAreaElement, Omit<TextareaProps, "ref">>(
  function textarea(
    { hasError, name, onBlur, onChange }: Omit<TextareaProps, "ref">,
    ref
  ): JSX.Element {
    return (
      <textarea
        className={`${styles.textarea} ${hasError ? styles.error : ""}`}
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        ref={ref}
      />
    );
  }
);

export default Textarea;
