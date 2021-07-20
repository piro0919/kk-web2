import { graphql, PageProps } from "gatsby";
import React, { useCallback } from "react";
import { toast, ToastContainer } from "react-toastify";
import BlogArticleTop, {
  BlogArticleTopProps,
} from "components/templates/BlogArticleTop";
import Seo from "components/templates/Seo";

export type DateProps = PageProps<
  Pick<GatsbyTypes.DateIndexQuery, "markdownRemark">
>;

function Date({
  data: {
    markdownRemark: {
      frontmatter: { date, title } = { date: "", title: "" },
      internal: { content },
      rawMarkdownBody = "",
    } = {
      frontmatter: { date: "", title: "" },
      internal: {
        content: "",
      },
      rawMarkdownBody: "",
    },
  },
}: DateProps): JSX.Element {
  const handleCopy = useCallback<NonNullable<BlogArticleTopProps["onCopy"]>>(
    (_, result) => {
      if (result) {
        toast.success("Copy Success!");

        return;
      }

      toast.error("Copy failed");
    },
    []
  );

  return (
    <>
      <Seo description={content} title={title} />
      <BlogArticleTop date={date} onCopy={handleCopy} title={title}>
        {rawMarkdownBody}
      </BlogArticleTop>
      <ToastContainer pauseOnFocusLoss={false} position="bottom-right" />
    </>
  );
}

export const pageQuery = graphql`
  query DateIndex($path: String!) {
    markdownRemark(frontmatter: { slug: { eq: $path } }) {
      frontmatter {
        title
        date
      }
      internal {
        content
      }
      rawMarkdownBody
    }
  }
`;

export default Date;
