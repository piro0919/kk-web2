import React from "react";
import * as styles from "./style.module.scss";
import Heading1 from "components/atoms/Heading1";

function Top(): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <Heading1 />
    </div>
  );
}

export default Top;
