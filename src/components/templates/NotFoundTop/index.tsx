import React from "react";
import Layout from "../Layout";
import * as styles from "./style.module.scss";

function NotFoundTop(): JSX.Element {
  return (
    <Layout>
      <div className={styles.wrapper}>404 Not Found</div>;
    </Layout>
  );
}

export default NotFoundTop;
