import { PageProps } from "gatsby";
import { useMixpanel } from "gatsby-plugin-mixpanel";
import React, { useEffect } from "react";
import LessonTop from "components/templates/LessonTop";
import Seo from "components/templates/Seo";

export type LessonProps = PageProps;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Lesson(_: LessonProps): JSX.Element {
  const mixpanel = useMixpanel();

  useEffect(() => {
    mixpanel.track("Lesson");
  }, [mixpanel]);

  return (
    <>
      <Seo title="Lesson" />
      <LessonTop />
    </>
  );
}

export default Lesson;
