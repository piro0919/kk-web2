import React, { ReactNode } from "react";
import * as styles from "./styles.module.scss";

export type LabelProps = {
  children: ReactNode;
};

function Label({ children }: LabelProps): JSX.Element {
  return <label className={styles.label}>{children}</label>;
}

export default Label;
