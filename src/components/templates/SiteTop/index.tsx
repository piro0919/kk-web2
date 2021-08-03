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
          <a href="https://hitmeup.co.jp/" rel="noreferrer" target="_blank">
            ヒットミーアップ株式会社
          </a>
        ),
        key: "hitmeup",
      },
      {
        children: (
          <a href="http://kontaniki.com/" rel="noreferrer" target="_blank">
            1stKontact
          </a>
        ),
        key: "kontaniki",
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
