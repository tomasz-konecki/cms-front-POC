import React from "react";
import PropTypes from "prop-types";
import TopBar from "../top-bar/TopBar";

import classes from "./Layout.module.scss";

function Layout({ children }) {
  return (
    <div>
      <TopBar />
      {children}
    </div>
  );
}

Layout.propTypes = {};

export default Layout;
