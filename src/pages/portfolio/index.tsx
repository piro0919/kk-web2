import { PageProps } from "gatsby";
import { useMixpanel } from "gatsby-plugin-mixpanel";
import React, { useEffect } from "react";
import PortfolioTop from "components/templates/PortfolioTop";
import Seo from "components/templates/Seo";

export type PortfolioProps = PageProps;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Portfolio(_: PortfolioProps): JSX.Element {
  const mixpanel = useMixpanel();

  useEffect(() => {
    mixpanel.track("Portfolio");
  }, [mixpanel]);

  return (
    <>
      <Seo title="Portfolio" />
      <PortfolioTop />
    </>
  );
}

export default Portfolio;
