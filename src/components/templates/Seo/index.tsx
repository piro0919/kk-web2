import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";

export type SeoProps = {
  description?: string;
  ogType?: "article" | "website";
  title?: string;
};

function Seo({
  description,
  ogType = "article",
  title,
}: SeoProps): JSX.Element {
  const {
    file: { publicURL = "" } = {},
    site: {
      siteMetadata: {
        description: siteDescription = "",
        siteUrl = "",
        title: siteTitle = "",
      } = {},
    } = {
      siteMetadata: {},
    },
    sitePage: { path } = { path: "" },
  } = useStaticQuery<GatsbyTypes.SeoIndexQuery>(graphql`
    query SeoIndex {
      file(name: { eq: "kk-web" }) {
        publicURL
      }
      site {
        siteMetadata {
          siteUrl
          description
          title
        }
      }
      sitePage {
        path
      }
    }
  `);

  return (
    <Helmet
      defaultTitle={siteTitle}
      title={title}
      titleTemplate={`%s | ${siteTitle}`}
    >
      <html lang="ja" />
      <meta content="438978880268835" property="fb:app_id" />
      <meta
        content={
          typeof description === "string" ? description : siteDescription
        }
        property="og:description"
      />
      <meta content={`${siteUrl}${publicURL}`} property="og:image" />
      <meta content="630" property="og:image:height" />
      <meta content="1200" property="og:image:width" />
      <meta content="ja_JP" property="og:locale" />
      <meta content={siteTitle} property="og:site_name" />
      <meta
        content={title ? `${title} | ${siteTitle}` : siteTitle}
        property="og:title"
      />
      <meta content={ogType} property="og:type" />
      <meta content={`${siteUrl}${path}`} property="og:url" />
      <meta content="piro" name="author" />
      <meta
        content={
          typeof description === "string" ? description : siteDescription
        }
        name="description"
      />
      <meta content="summary_large_image" name="twitter:card" />
    </Helmet>
  );
}

export default Seo;
