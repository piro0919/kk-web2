import { Link } from "gatsby";
import React, { useMemo } from "react";
import Layout from "../Layout";
import * as styles from "./style.module.scss";
import UnorderedList, {
  UnorderedListProps,
} from "components/organisms/UnorderedList";

function PortfolioTop(): JSX.Element {
  const services = useMemo<UnorderedListProps["unordereds"]>(
    () => [
      {
        children: <Link to="/application">Application</Link>,
        key: "Application",
      },
      {
        children: <Link to="/movie">Movie</Link>,
        key: "Movie",
      },
      {
        children: <Link to="/npm">Npm</Link>,
        key: "Npm",
      },
      {
        children: <Link to="/service">Service</Link>,
        key: "Service",
      },
      {
        children: <Link to="/site">Site</Link>,
        key: "Site",
      },
    ],
    []
  );

  return (
    <Layout>
      <div className={styles.wrapper}>
        <UnorderedList unordereds={services} />
      </div>
    </Layout>
  );
}

export default PortfolioTop;
