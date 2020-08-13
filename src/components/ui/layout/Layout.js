import React, { useContext } from "react";
import { array, node } from "prop-types";
import TopBar from "../top-bar/TopBar";

import LocationsContext from "contexts/locations-context/LocationsContext";

import LocationsTree from "../locations-tree/LocationsTree";

import classes from "./Layout.module.scss";

function Layout({ children }) {
  const { locations } = useContext(LocationsContext);

  return (
    <div>
      <TopBar />
      <div className={classes["layout-main-view"]}>
        {locations.length > 0 && <LocationsTree />}
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
