import { graphql, PageProps } from "gatsby";
import { useMixpanel } from "gatsby-plugin-mixpanel";
import React, { useCallback, useEffect, useMemo } from "react";
import { toast, ToastContainer } from "react-toastify";
import BlogArticleTop, {
  BlogArticleTopProps,
} from "components/templates/BlogArticleTop";
import Seo from "components/templates/Seo";

type Edge = {
  node: {
    frontmatter: {
      date: string;
      slug: string;
      title: string;
    };
  };
};

export type DateProps = PageProps<
  Pick<GatsbyTypes.DateIndexQuery, "markdownRemark">,
  {
    next?: Edge;
    prev?: Edge;
  }
>;

function Date({
  data: { markdownRemark },
  pageContext: { next, prev },
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
  const nextProps = useMemo<BlogArticleTopProps["next"]>(() => {
    if (!next) {
      return undefined;
    }

    const {
      node: {
        frontmatter: { date, slug, title },
      },
    } = next;

    return { date, slug, title };
  }, [next]);
  const prevProps = useMemo<BlogArticleTopProps["prev"]>(() => {
    if (!prev) {
      return undefined;
    }

    const {
      node: {
        frontmatter: { date, slug, title },
      },
    } = prev;

    return { date, slug, title };
  }, [prev]);
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
        next={nextProps}
        onCopy={handleCopy}
        prev={prevProps}
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
