import { PageProps } from "gatsby";
import { useMixpanel } from "gatsby-plugin-mixpanel";
import React, { useEffect } from "react";
import ExtensionTop from "components/templates/ExtensionTop";
import Seo from "components/templates/Seo";

export type ExtensionProps = PageProps;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Extension(_: ExtensionProps): JSX.Element {
  const mixpanel = useMixpanel();

  useEffect(() => {
    mixpanel.track("Extension");
  }, [mixpanel]);

  return (
    <>
      <Seo title="Extension" />
      <ExtensionTop />
    </>
  );
}

export default Extension;
