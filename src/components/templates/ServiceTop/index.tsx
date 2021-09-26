import React, { useMemo } from "react";
import Layout from "../Layout";
import * as styles from "./style.module.scss";
import UnorderedList, {
  UnorderedListProps,
} from "components/organisms/UnorderedList";

function ServiceTop(): JSX.Element {
  const services = useMemo<UnorderedListProps["unordereds"]>(
    () => [
      {
        children: (
          <a
            href="https://omocoro-daily.kk-web.link/"
            rel="noreferrer"
            target="_blank"
          >
            オモコロ&デイリーポータルＺ非公式リーダー
          </a>
        ),
        key: "オモコロ&デイリーポータルＺ非公式リーダー",
      },
      {
        children: (
          <a
            href="https://on-memo.kk-web.link/"
            rel="noreferrer"
            target="_blank"
          >
            おんめも
          </a>
        ),
        key: "おんめも",
      },
      {
        children: (
          <a
            href="https://siritori-timer.kk-web.link/"
            rel="noreferrer"
            target="_blank"
          >
            限界しりとりタイマー
          </a>
        ),
        key: "限界しりとりタイマー",
      },
      {
        children: (
          <a
            href="https://serifuya.kk-web.link/"
            rel="noreferrer"
            target="_blank"
          >
            せりふや
          </a>
        ),
        key: "せりふや",
      },
      {
        children: (
          <a
            href="https://recigle.kk-web.link/"
            rel="noreferrer"
            target="_blank"
          >
            レシグル
          </a>
        ),
        key: "レシグル",
      },
    ],
    []
  );

  return (
    <Layout>
      <div className={styles.wrapper}>
        <UnorderedList unordereds={services} />
      </div>
    </Layout>
  );
}

export default ServiceTop;
