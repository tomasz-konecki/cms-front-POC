import React, { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { array, node } from "prop-types";
import TopBar from "../top-bar/TopBar";

import LocationsContext from "contexts/locations-context/LocationsContext";

import LocationsTree from "../locations-tree/LocationsTree";

import classes from "./Layout.module.scss";

function Layout({ allLocations, children }) {
  const { locations, setLocations } = useContext(LocationsContext);

  useEffect(() => {
    console.log("allLocations", allLocations);
    setLocations(allLocations);
  }, [allLocations]);

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
