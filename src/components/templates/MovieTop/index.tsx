import React, { useMemo } from "react";
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
        key: "youTube",
      },
      {
        children: (
          <a href="https://vimeo.com/piro0919" rel="noreferrer" target="_blank">
            Vimeo
          </a>
        ),
        key: "vimeo",
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
    <div className={styles.wrapper}>
      <UnorderedList unordereds={movies} />
    </div>
  );
}

export default MovieTop;
