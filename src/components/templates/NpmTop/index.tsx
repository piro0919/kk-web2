import React, { useMemo } from "react";
import Layout from "../Layout";
import * as styles from "./style.module.scss";
import UnorderedList, {
  UnorderedListProps,
} from "components/organisms/UnorderedList";

function NpmTop(): JSX.Element {
  const packages = useMemo<UnorderedListProps["unordereds"]>(
    () => [
      {
        children: (
          <a
            href="https://www.npmjs.com/package/next-firebase-authentication"
            rel="noreferrer"
            target="_blank"
          >
            next-firebase-authentication
          </a>
        ),
        key: "next-firebase-authentication",
      },
      {
        children: (
          <a
            href="https://www.npmjs.com/package/react-comic-viewer"
            rel="noreferrer"
            target="_blank"
          >
            react-comic-viewer
          </a>
        ),
        key: "react-comic-viewer",
      },
      {
        children: (
          <a
            href="https://www.npmjs.com/package/react-three-toggle"
            rel="noreferrer"
            target="_blank"
          >
            react-three-toggle
          </a>
        ),
        key: "react-three-toggle",
      },
      {
        children: (
          <a
            href="https://www.npmjs.com/package/use-pwa2"
            rel="noreferrer"
            target="_blank"
          >
            use-pwa2
          </a>
        ),
        key: "use-pwa2",
      },
    ],
    []
  );

  return (
    <Layout>
      <div className={styles.wrapper}>
        <UnorderedList unordereds={packages} />
      </div>
    </Layout>
  );
}

export default NpmTop;
