import { useMemo } from "react";
import { blog } from "react-icons-kit/icomoon/blog";
import { bubbles2 } from "react-icons-kit/icomoon/bubbles2";
import { cogs } from "react-icons-kit/icomoon/cogs";
import { earth } from "react-icons-kit/icomoon/earth";
import { film } from "react-icons-kit/icomoon/film";
import { home } from "react-icons-kit/icomoon/home";
import { link } from "react-icons-kit/icomoon/link";
import { user } from "react-icons-kit/icomoon/user";
import { androidMail } from "react-icons-kit/ionicons/androidMail";

type Menu = {
  icon: unknown;
  name: string;
  to: string;
};

export type MenuData = Menu[];

function useMenu(): MenuData {
  const menu = useMemo(
    () => [
      {
        icon: home,
        name: "Home",
        to: "/",
      },
      {
        icon: user,
        name: "About",
        to: "/about",
      },
      {
        icon: blog,
        name: "Blog",
        to: "/blog",
      },
      {
        icon: androidMail,
        name: "Contact",
        to: "/contact",
      },
      {
        icon: bubbles2,
        name: "Lesson",
        to: "/lesson",
      },
      {
        icon: link,
        name: "Link",
        to: "/link",
      },
      {
        icon: film,
        name: "Movie",
        to: "/movie",
      },
      {
        icon: cogs,
        name: "Service",
        to: "/service",
      },
      {
        icon: earth,
        name: "Site",
        to: "/site",
      },
    ],
    []
  );

  return menu;
}

export default useMenu;
