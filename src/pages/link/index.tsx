import { PageProps } from "gatsby";
import React from "react";
import LinkTop from "components/templates/LinkTop";
import Seo from "components/templates/Seo";

export type LinkProps = PageProps;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Link(_: LinkProps): JSX.Element {
  return (
    <>
      <Seo title="Link" />
      <LinkTop />
    </>
  );
}

export default Link;
