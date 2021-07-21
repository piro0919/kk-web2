import React from "react";
import Layout from "../Layout";
import * as styles from "./style.module.scss";

function SuccessTop(): JSX.Element {
  return (
    <Layout>
      <div className={styles.wrapper}>
        <p>Send Success Email!</p>
      </div>
    </Layout>
  );
}

export default SuccessTop;
