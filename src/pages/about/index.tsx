import { PageProps } from "gatsby";
import { useMixpanel } from "gatsby-plugin-mixpanel";
import React, { useEffect } from "react";
import AboutTop from "components/templates/AboutTop";
import Seo from "components/templates/Seo";

export type AboutProps = PageProps;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function About(_: AboutProps): JSX.Element {
  const mixpanel = useMixpanel();

  useEffect(() => {
    mixpanel.track("About");
  }, [mixpanel]);

  return (
    <>
      <Seo title="About" />
      <AboutTop />
    </>
  );
}

export default About;
