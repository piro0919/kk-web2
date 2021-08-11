import React, { useMemo } from "react";
import Layout from "../Layout";
import * as styles from "./style.module.scss";
import UnorderedList, {
  UnorderedListProps,
} from "components/organisms/UnorderedList";

function MovieTop(): JSX.Element {
  const movies = useMemo<UnorderedListProps["unordereds"]>(
    () => [
      {
        children: (
          <a
            href="https://www.youtube.com/channel/UC--pDyTi3aPS5wf6PN6kXDA"
            rel="noreferrer"
            target="_blank"
          >
            YouTube
          </a>
        ),
        key: "YouTube",
      },
      {
        children: (
          <a href="https://vimeo.com/piro0919" rel="noreferrer" target="_blank">
            Vimeo
          </a>
        ),
        key: "Vimeo",
      },
      {
        children: (
          <a
            href="http://www.nicovideo.jp/mylist/30473930"
            rel="noreferrer"
            target="_blank"
          >
            niconico
          </a>
        ),
        key: "niconico",
      },
    ],
    []
  );

  return (
    <Layout>
      <div className={styles.wrapper}>
        <UnorderedList unordereds={movies} />
      </div>
    </Layout>
  );
}

export default MovieTop;
