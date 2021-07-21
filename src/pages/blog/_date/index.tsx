import { graphql, PageProps } from "gatsby";
import { useMixpanel } from "gatsby-plugin-mixpanel";
import React, { useCallback, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import BlogArticleTop, {
  BlogArticleTopProps,
} from "components/templates/BlogArticleTop";
import Seo from "components/templates/Seo";

export type DateProps = PageProps<
  Pick<GatsbyTypes.DateIndexQuery, "markdownRemark">
>;

function Date({ data: { markdownRemark } }: DateProps): JSX.Element {
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
  const mixpanel = useMixpanel();

  useEffect(() => {
    mixpanel.track("Date");
  }, [mixpanel]);

  return (
    <>
      <Seo
        description={markdownRemark?.internal.content}
        title={markdownRemark?.frontmatter?.title}
      />
      <BlogArticleTop
        date={markdownRemark?.frontmatter?.date}
        onCopy={handleCopy}
        title={markdownRemark?.frontmatter?.title}
      >
        {markdownRemark?.rawMarkdownBody || ""}
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
