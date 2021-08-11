import React, { useMemo } from "react";
import Layout from "../Layout";
import * as styles from "./style.module.scss";
import UnorderedList, {
  UnorderedListProps,
} from "components/organisms/UnorderedList";

function SiteTop(): JSX.Element {
  const sites = useMemo<UnorderedListProps["unordereds"]>(
    () => [
      {
        children: (
          <a href="http://kontaniki.com/" rel="noreferrer" target="_blank">
            1stKontact
          </a>
        ),
        key: "1stKontact",
      },
    ],
    []
  );

  return (
    <Layout>
      <div className={styles.wrapper}>
        <UnorderedList unordereds={sites} />
      </div>
    </Layout>
  );
}

export default SiteTop;
