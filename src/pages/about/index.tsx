import { PageProps } from "gatsby";
import React from "react";
import AboutTop from "components/templates/AboutTop";
import Seo from "components/templates/Seo";

export type AboutProps = PageProps;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function About(_: AboutProps): JSX.Element {
  return (
    <>
      <Seo title="About" />
      <AboutTop />
    </>
  );
}

export default About;
