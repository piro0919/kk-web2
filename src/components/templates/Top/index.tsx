import React from "react";
import Layout from "../Layout";
import * as styles from "./style.module.scss";
import Heading1 from "components/atoms/Heading1";

function Top(): JSX.Element {
  return (
    <Layout>
      <div className={styles.wrapper}>
        <Heading1 />
      </div>
    </Layout>
  );
}

export default Top;
