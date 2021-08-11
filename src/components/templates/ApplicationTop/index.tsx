import React, { useMemo } from "react";
import Layout from "../Layout";
import * as styles from "./style.module.scss";
import UnorderedList, {
  UnorderedListProps,
} from "components/organisms/UnorderedList";

function ApplicationTop(): JSX.Element {
  const applications = useMemo<UnorderedListProps["unordereds"]>(
    () => [
      {
        children: (
          <a
            href="https://play.google.com/store/apps/details?id=link.kk_web.on_memo.twa"
            rel="noreferrer"
            target="_blank"
          >
            おんめも
          </a>
        ),
        key: "おんめも",
      },
    ],
    []
  );

  return (
    <Layout>
      <div className={styles.wrapper}>
        <UnorderedList unordereds={applications} />
      </div>
    </Layout>
  );
}

export default ApplicationTop;
