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
          <a
            href="https://kanaohonten.vercel.app/"
            rel="noreferrer"
            target="_blank"
          >
            金尾本店
          </a>
        ),
        key: "金尾本店",
      },
      {
        children: (
          <a
            href="https://www.nbhyakuhati.com/"
            rel="noreferrer"
            target="_blank"
          >
            7:08
          </a>
        ),
        key: "7:08",
      },
      {
        children: (
          <a href="https://kontaniki.com/" rel="noreferrer" target="_blank">
            1stKontact
          </a>
        ),
        key: "1stKontact",
      },
      {
        children: (
          <a
            href="https://hatake.kk-web.link/"
            rel="noreferrer"
            target="_blank"
          >
            はじめしゃちょーの畑 非公式ファンサイト
          </a>
        ),
        key: "はじめしゃちょーの畑 非公式ファンサイト",
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
