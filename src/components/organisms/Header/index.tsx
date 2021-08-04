import React from "react";
import * as styles from "./style.module.scss";
import Navigation from "components/molecules/Navigation";
import SearchForm from "components/molecules/SearchForm";

function Header(): JSX.Element {
  return (
    <header className={styles.header}>
      <Navigation />
      <div className={styles.searchFormWrapper}>
        <SearchForm />
      </div>
    </header>
  );
}

export default Header;
