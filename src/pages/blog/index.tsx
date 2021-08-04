import { useLocation } from "@reach/router";
import Fuse from "fuse.js";
import { graphql, PageProps } from "gatsby";
import { useMixpanel } from "gatsby-plugin-mixpanel";
import { parse } from "query-string";
import React, { useEffect, useMemo } from "react";
import BlogTop, { BlogTopProps } from "components/templates/BlogTop";
import Seo from "components/templates/Seo";

export type BlogProps = PageProps<
  Pick<GatsbyTypes.BlogIndexQuery, "allMarkdownRemark">
>;

function Blog({
  data: {
    allMarkdownRemark: { edges },
  },
}: BlogProps): JSX.Element {
  const { search } = useLocation();
  const { q } = useMemo(() => parse(search), [search]);
  const blogs = useMemo<BlogTopProps["blogs"]>(() => {
    const blogs = edges.map(
      ({
        node: {
          frontmatter: { date = "", slug = "", title = "" } = {
            date: "",
            slug: "",
            title: "",
          },
          internal: { content },
        },
      }) => ({
        content,
        date,
        title,
        to: slug,
      })
    );

    if (!q) {
      return blogs;
    }

    const fuse = new Fuse(blogs, {
      keys: ["content", "title"],
      shouldSort: false,
      threshold: 0.45,
    });

    return fuse
      .search(
        Array.isArray(q)
          ? q.map((q) => decodeURIComponent(q)).join(" ")
          : decodeURIComponent(q)
      )
      .map(({ item }) => item);
  }, [edges, q]);
  const mixpanel = useMixpanel();

  useEffect(() => {
    mixpanel.track("Blog");
  }, [mixpanel]);

  return (
    <>
      <Seo title="Blog" />
      <BlogTop blogs={blogs} />
    </>
  );
}

export const pageQuery = graphql`
  query BlogIndex {
    allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
      edges {
        node {
          frontmatter {
            date
            slug
            title
          }
          internal {
            content
          }
        }
      }
    }
  }
`;

export default Blog;
