import { Link } from "gatsby";
import React, { useMemo } from "react";
import Icon from "react-icons-kit";
import SearchForm from "../SearchForm";
import * as styles from "./style.module.scss";
import useMenu from "hooks/useMenu";

function MobileNavigation(): JSX.Element {
  const menu = useMenu();
  const items = useMemo(
    () =>
      menu.map(({ icon, name, to }) => (
        <li key={to}>
          <Link activeClassName={styles.active} className={styles.link} to={to}>
            <Icon icon={icon} size={36} />
            <div className={styles.name}>{name}</div>
          </Link>
        </li>
      )),
    [menu]
  );

  return (
    <nav className={styles.wrapper}>
      <div className={styles.searchFormWrapper}>
        <SearchForm />
      </div>
      <ul className={styles.list}>{items}</ul>
    </nav>
  );
}

export default MobileNavigation;
