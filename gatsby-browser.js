import "ress";
import "./src/styles/global.scss";
import "github-markdown-css";
import "react-toastify/dist/ReactToastify.css";
import LogRocket from "logrocket";
import setupLogRocketReact from "logrocket-react";
import mixpanel from "mixpanel-browser";
import React from "react";

export const onClientEntry = () => {
  if (process.env.NODE_ENV !== "production") {
    const whyDidYouRender = require("@welldone-software/why-did-you-render");

    whyDidYouRender(React, {
      trackAllPureComponents: true,
    });
  }

  if (process.env.NODE_ENV === "development") {
    return;
  }

  LogRocket.init("t4xmlm/kk-web");

  LogRocket.getSessionURL((sessionURL) => {
    mixpanel.track("LogRocket", { sessionURL });
  });

  setupLogRocketReact(LogRocket);
};
