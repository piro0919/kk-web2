import { PageProps } from "gatsby";
import { useMixpanel } from "gatsby-plugin-mixpanel";
import React, { useEffect } from "react";
import ApplicationTop from "components/templates/ApplicationTop";
import Seo from "components/templates/Seo";

export type ApplicationProps = PageProps;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Application(_: ApplicationProps): JSX.Element {
  const mixpanel = useMixpanel();

  useEffect(() => {
    mixpanel.track("Application");
  }, [mixpanel]);

  return (
    <>
      <Seo title="Application" />
      <ApplicationTop />
    </>
  );
}

export default Application;
