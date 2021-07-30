import { Link } from "gatsby";
import React, { useMemo } from "react";
import * as styles from "./style.module.scss";
import useMenu from "hooks/useMenu";

function Navigation(): JSX.Element {
  const menu = useMenu();
  const items = useMemo(
    () =>
      menu.map(({ name, to }) => (
        <li key={to}>
          <Link activeClassName={styles.active} className={styles.link} to={to}>
            {name}
          </Link>
        </li>
      )),
    [menu]
  );

  return (
    <nav>
      <ul className={styles.list}>{items}</ul>
    </nav>
  );
}

export default Navigation;
