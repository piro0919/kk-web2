import { PageProps } from "gatsby";
import React from "react";
import SuccessTop from "components/templates/SuccessTop";

export type SuccessProps = PageProps;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Success(_: SuccessProps): JSX.Element {
  return <SuccessTop />;
}

export default Success;
