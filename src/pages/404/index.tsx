import { PageProps } from "gatsby";
import React from "react";
import NotFoundTop from "components/templates/NotFoundTop";
import Seo from "components/templates/Seo";

export type NotFoundProps = PageProps;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const NotFound = (_: NotFoundProps): JSX.Element => {
  return (
    <>
      <Seo title="404" />
      <NotFoundTop />
    </>
  );
};

export default NotFound;
