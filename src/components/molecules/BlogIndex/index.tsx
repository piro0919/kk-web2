import { Link } from "gatsby";
import React from "react";
import * as styles from "./style.module.scss";

export type BlogIndexProps = {
  date: string;
  title: string;
  to: string;
};

function BlogIndex({ date, title, to }: BlogIndexProps): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <Link className={styles.link} to={to}>
        <div className={styles.date}>{date}</div>
        <div>{title}</div>
      </Link>
    </div>
  );
}

export default BlogIndex;
