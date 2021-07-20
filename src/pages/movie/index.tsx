import { PageProps } from "gatsby";
import React from "react";
import MovieTop from "components/templates/MovieTop";
import Seo from "components/templates/Seo";

export type MovieProps = PageProps;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Movie(_: MovieProps): JSX.Element {
  return (
    <>
      <Seo title="Seo" />
      <MovieTop />
    </>
  );
}

export default Movie;
