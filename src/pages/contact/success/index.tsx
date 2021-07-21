import { PageProps } from "gatsby";
import { useMixpanel } from "gatsby-plugin-mixpanel";
import React, { useEffect } from "react";
import SuccessTop from "components/templates/SuccessTop";

export type SuccessProps = PageProps;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Success(_: SuccessProps): JSX.Element {
  const mixpanel = useMixpanel();

  useEffect(() => {
    mixpanel.track("Success");
  }, [mixpanel]);

  return <SuccessTop />;
}

export default Success;
