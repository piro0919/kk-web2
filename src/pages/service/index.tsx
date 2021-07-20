import { PageProps } from "gatsby";
import React from "react";
import Seo from "components/templates/Seo";
import ServiceTop from "components/templates/ServiceTop";

export type ServiceProps = PageProps;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Service(_: ServiceProps): JSX.Element {
  return (
    <>
      <Seo title="Service" />
      <ServiceTop />
    </>
  );
}

export default Service;
