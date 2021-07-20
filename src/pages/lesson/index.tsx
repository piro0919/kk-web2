import { PageProps } from "gatsby";
import React from "react";
import LessonTop from "components/templates/LessonTop";
import Seo from "components/templates/Seo";

export type LessonProps = PageProps;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Lesson(_: LessonProps): JSX.Element {
  return (
    <>
      <Seo title="Lesson" />
      <LessonTop />
    </>
  );
}

export default Lesson;
