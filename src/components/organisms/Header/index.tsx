import React from "react";
import * as styles from "./style.module.scss";
import Navigation from "components/molecules/Navigation";

function Header(): JSX.Element {
  return (
    <header className={styles.header}>
      <Navigation />
    </header>
  );
}

export default Header;
