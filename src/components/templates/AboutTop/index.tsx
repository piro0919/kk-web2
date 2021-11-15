import React, { useMemo } from "react";

import Layout from "../Layout";
import * as styles from "./style.module.scss";
import DefinitionList, {
  DefinitionListProps,
} from "components/organisms/DefinitionList";

function AboutTop(): JSX.Element {
  const definitions = useMemo<DefinitionListProps["definitions"]>(
    () => [
      {
        description: "Kohei Kawamura",
        term: "Name",
      },
      {
        description: "piro",
        term: "Handle",
      },
      {
        description: "Tokyo, Japan",
        term: "Address",
      },
      {
        description: "Freelancer (Front End Developer, Video Creator)",
        term: "Job",
      },
      {
        description: (
          <a
            href="https://www.wantedly.com/id/kawamura_kouhei"
            rel="noreferrer"
            target="_blank"
          >
            Wantedly
          </a>
        ),
        term: "Resume",
      },
    ],
    []
  );

  return (
    <Layout>
      <div className={styles.wrapper}>
        <DefinitionList definitions={definitions} />
      </div>
    </Layout>
  );
}

export default AboutTop;
