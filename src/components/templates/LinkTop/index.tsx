import React, { useMemo } from "react";
import Layout from "../Layout";
import * as styles from "./style.module.scss";
import UnorderedList, {
  UnorderedListProps,
} from "components/organisms/UnorderedList";

function LinkTop(): JSX.Element {
  const links = useMemo<UnorderedListProps["unordereds"]>(
    () => [
      {
        children: (
          <a
            href="https://github.com/piro0919"
            rel="noreferrer"
            target="_blank"
          >
            GitHub
          </a>
        ),
        key: "GitHub",
      },
      {
        children: (
          <a
            href="https://www.instagram.com/piro9190/"
            rel="noreferrer"
            target="_blank"
          >
            Instagram
          </a>
        ),
        key: "Instagram",
      },
      {
        children: (
          <a
            href="https://join.slack.com/t/kk-webhq/shared_invite/zt-r0qjvw1f-5QCnXyGzW4~OA6574tIipg"
            rel="noreferrer"
            target="_blank"
          >
            Slack
          </a>
        ),
        key: "Slack",
      },
      {
        children: (
          <a
            href="https://twitter.com/piro0919"
            rel="noreferrer"
            target="_blank"
          >
            Twitter
          </a>
        ),
        key: "Twitter",
      },
      {
        children: (
          <a
            href="https://www.wantedly.com/users/125337597"
            rel="noreferrer"
            target="_blank"
          >
            Wantedly
          </a>
        ),
        key: "Wantedly",
      },
    ],
    []
  );

  return (
    <Layout>
      <div className={styles.wrapper}>
        <UnorderedList unordereds={links} />
      </div>
    </Layout>
  );
}

export default LinkTop;
