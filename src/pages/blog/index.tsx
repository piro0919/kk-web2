import { graphql, PageProps } from "gatsby";
import React, { useMemo } from "react";
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
  const blogs = useMemo<BlogTopProps["blogs"]>(
    () =>
      edges.map(
        ({
          node: {
            frontmatter: { date = "", slug = "", title = "" } = {
              date: "",
              slug: "",
              title: "",
            },
          },
        }) => ({
          date,
          title,
          to: slug,
        })
      ),
    [edges]
  );

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
        }
      }
    }
  }
`;

export default Blog;
