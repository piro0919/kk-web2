import React, { useMemo } from "react";
import Layout from "../Layout";
import * as styles from "./style.module.scss";
import UnorderedList, {
  UnorderedListProps,
} from "components/organisms/UnorderedList";

function ExtensionTop(): JSX.Element {
  const extensions = useMemo<UnorderedListProps["unordereds"]>(
    () => [
      {
        children: (
          <a
            href="https://marketplace.visualstudio.com/items?itemName=kk-web.commit-type"
            rel="noreferrer"
            target="_blank"
          >
            Commit Type
          </a>
        ),
        key: "Commit Type",
      },
    ],
    []
  );

  return (
    <Layout>
      <div className={styles.wrapper}>
        <UnorderedList unordereds={extensions} />
      </div>
    </Layout>
  );
}

export default ExtensionTop;
