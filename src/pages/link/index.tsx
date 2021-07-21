import { PageProps } from "gatsby";
import { useMixpanel } from "gatsby-plugin-mixpanel";
import React, { useEffect } from "react";
import LinkTop from "components/templates/LinkTop";
import Seo from "components/templates/Seo";

export type LinkProps = PageProps;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Link(_: LinkProps): JSX.Element {
  const mixpanel = useMixpanel();

  useEffect(() => {
    mixpanel.track("Link");
  }, [mixpanel]);

  return (
    <>
      <Seo title="Link" />
      <LinkTop />
    </>
  );
}

export default Link;
