import { PageProps } from "gatsby";
import { useMixpanel } from "gatsby-plugin-mixpanel";
import React, { useEffect } from "react";
import Seo from "components/templates/Seo";
import Top from "components/templates/Top";

export type PagesProps = PageProps;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Pages(_: PagesProps): JSX.Element {
  const mixpanel = useMixpanel();

  useEffect(() => {
    mixpanel.track("Pages");
  }, [mixpanel]);

  return (
    <>
      <Seo ogType="website" />
      <Top />
    </>
  );
}

export default Pages;
