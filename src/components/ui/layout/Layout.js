import React from "react";
import { array, node } from "prop-types";
import TopBar from "../top-bar/TopBar";

import LocationsTree from "../locations-tree/LocationsTree";

import classes from "./Layout.module.scss";

function Layout({ children }) {
  return (
    <div>
      <TopBar />
      <div className={classes["layout-main-view"]}>
        <LocationsTree />
        {children}
      </div>
    </div>
  );
}

Layout.propTypes = {
  allLocations: array,
  children: node
};

export default Layout;
