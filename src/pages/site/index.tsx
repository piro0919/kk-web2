import { PageProps } from "gatsby";
import { useMixpanel } from "gatsby-plugin-mixpanel";
import React, { useEffect } from "react";
import Seo from "components/templates/Seo";
import SiteTop from "components/templates/SiteTop";

export type SiteProps = PageProps;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Site(_: SiteProps): JSX.Element {
  const mixpanel = useMixpanel();

  useEffect(() => {
    mixpanel.track("Site");
  }, [mixpanel]);

  return (
    <>
      <Seo title="Site" />
      <SiteTop />
    </>
  );
}

export default Site;
