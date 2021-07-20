import NoSSR from "@mpth/react-no-ssr";
import React, {
  CSSProperties,
  ReactNode,
  useMemo,
  useState,
  useCallback,
} from "react";
import Icon from "react-icons-kit";
import { menu } from "react-icons-kit/entypo/menu";
import { useOutsideClickRef } from "rooks";
import * as styles from "./style.module.scss";
import MobileNavigation from "components/molecules/MobileNavigation";
import Footer from "components/organisms/Footer";
import Header from "components/organisms/Header";
import useWindowSize from "hooks/useWindowSize";

export type LayoutProps = {
  children: ReactNode;
};

function Layout({ children }: LayoutProps): JSX.Element {
  const { windowHeight } = useWindowSize();
  const wrapperStyle = useMemo<CSSProperties>(
    () => ({
      minHeight: `${windowHeight}px`,
    }),
    [windowHeight]
  );
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const handleOpen = useCallback(() => {
    setShowMobileMenu(true);
  }, []);
  const handleClose = useCallback(() => {
    setShowMobileMenu(false);
  }, []);
  const [ref] = useOutsideClickRef(handleClose);

  return (
    <NoSSR>
      <div className={styles.wrapper} style={wrapperStyle}>
        <div className={styles.headerWrapper}>
          <Header />
        </div>
        <main className={styles.main}>{children}</main>
        <div className={styles.footerWrapper}>
          <Footer />
        </div>
        <div className={styles.mobile}>
          {showMobileMenu ? (
            <div ref={ref}>
              <MobileNavigation />
            </div>
          ) : (
            <button className={styles.menuButton} onClick={handleOpen}>
              <Icon icon={menu} size={36} />
            </button>
          )}
        </div>
      </div>
    </NoSSR>
  );
}

export default Layout;
