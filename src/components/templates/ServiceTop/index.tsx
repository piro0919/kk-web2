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
            href="https://siritori-timer.kk-web.link/"
            rel="noreferrer"
            target="_blank"
          >
            限界しりとりタイマー
          </a>
        ),
        key: "siritori",
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
        key: "serifuya",
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
        key: "recigle",
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
