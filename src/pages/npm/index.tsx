import { PageProps } from "gatsby";
import { useMixpanel } from "gatsby-plugin-mixpanel";
import React, { useEffect } from "react";
import NpmTop from "components/templates/NpmTop";
import Seo from "components/templates/Seo";

export type NpmProps = PageProps;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Npm(_: NpmProps): JSX.Element {
  const mixpanel = useMixpanel();

  useEffect(() => {
    mixpanel.track("Npm");
  }, [mixpanel]);

  return (
    <>
      <Seo title="Npm" />
      <NpmTop />
    </>
  );
}

export default Npm;
