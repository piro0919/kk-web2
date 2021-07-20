import React, { useMemo } from "react";

import * as styles from "./style.module.scss";
import BlogIndex, { BlogIndexProps } from "components/molecules/BlogIndex";

type Blog = Pick<BlogIndexProps, "date" | "title" | "to">;

export type BlogListProps = {
  blogs: Blog[];
};

function BlogList({ blogs }: BlogListProps): JSX.Element {
  const items = useMemo(
    () =>
      blogs.map(({ date, title, to }) => (
        <li key={to}>
          <BlogIndex date={date} title={title} to={to} />
        </li>
      )),
    [blogs]
  );

  return <ul className={styles.list}>{items}</ul>;
}

export default BlogList;
