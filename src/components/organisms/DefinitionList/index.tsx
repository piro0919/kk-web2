import React, { ReactNode, useMemo } from "react";

import * as styles from "./style.module.scss";

type Definition = {
  description: ReactNode;
  term: string;
};

export type DefinitionListProps = {
  definitions: Definition[];
};

function DefinitionList({ definitions }: DefinitionListProps): JSX.Element {
  const items = useMemo(
    () =>
      definitions.map(({ description, term }) => (
        <div key={term}>
          <dt className={styles.term}>{term}</dt>
          <dd>{description}</dd>
        </div>
      )),
    [definitions]
  );

  return <dl className={styles.list}>{items}</dl>;
}

export default DefinitionList;
