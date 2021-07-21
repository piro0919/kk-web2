import { PageProps } from "gatsby";
import { useMixpanel } from "gatsby-plugin-mixpanel";
import React, { useEffect } from "react";
import Seo from "components/templates/Seo";
import ServiceTop from "components/templates/ServiceTop";

export type ServiceProps = PageProps;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Service(_: ServiceProps): JSX.Element {
  const mixpanel = useMixpanel();

  useEffect(() => {
    mixpanel.track("Service");
  }, [mixpanel]);

  return (
    <>
      <Seo title="Service" />
      <ServiceTop />
    </>
  );
}

export default Service;
