import { PageProps } from "gatsby";
import { useMixpanel } from "gatsby-plugin-mixpanel";
import React, { useEffect } from "react";
import NotFoundTop from "components/templates/NotFoundTop";
import Seo from "components/templates/Seo";

export type NotFoundProps = PageProps;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const NotFound = (_: NotFoundProps): JSX.Element => {
  const mixpanel = useMixpanel();

  useEffect(() => {
    mixpanel.track("NotFound");
  }, [mixpanel]);

  return (
    <>
      <Seo title="404" />
      <NotFoundTop />
    </>
  );
};

export default NotFound;
