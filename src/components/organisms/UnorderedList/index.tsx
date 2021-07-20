import React, { useMemo, ReactNode } from "react";

import * as styles from "./style.module.scss";

type Unordered = {
  children: ReactNode;
  key: string;
};

export type UnorderedListProps = {
  unordereds: Unordered[];
};

function UnorderedList({ unordereds }: UnorderedListProps): JSX.Element {
  const items = useMemo(
    () => unordereds.map(({ children, key }) => <li key={key}>{children}</li>),
    [unordereds]
  );

  return <ul className={styles.list}>{items}</ul>;
}

export default UnorderedList;
