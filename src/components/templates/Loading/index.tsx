import React from "react";
import ReactLoading from "react-loading";
import * as styles from "./style.module.scss";

function Loading(): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <ReactLoading height="96px" type="spinningBubbles" width="96px" />
    </div>
  );
}

export default Loading;
