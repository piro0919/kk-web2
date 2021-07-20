import React from "react";
import Layout from "../Layout";
import * as styles from "./style.module.scss";
import BlogList, { BlogListProps } from "components/organisms/BlogList";

export type BlogTopProps = Pick<BlogListProps, "blogs">;

function BlogTop({ blogs }: BlogTopProps): JSX.Element {
  return (
    <Layout>
      <div className={styles.wrapper}>
        <div className={styles.inner}>
          <BlogList blogs={blogs} />
        </div>
      </div>
    </Layout>
  );
}

export default BlogTop;
