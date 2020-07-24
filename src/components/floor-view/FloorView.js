import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import FloorStatus from "./components/floor-status/FloorStatus";

import Header from "components/main-view/components/header/Header";

import classes from "./FloorView.module.scss";

const locations = {
  boi: "Bank Of Ireland",
  intevi: "Intevi"
};

function FloorView(props) {
  const [selectedFloor, setSelectedFloor] = useState({
    parentLocation: "",
    site: "",
    floor: ""
  });
  const [isFloorSelected, setIsFloorSelected] = useState(false);
  const { pathname } = useLocation();

  const setUpFloorObject = () => {
    const locationArray = pathname.split("/");

    const floorObject = {
      parentLocation: locations[locationArray[1]],
      site: locationArray[2].replace(/-/g, " "),
      floor: locationArray[3].replace("-", " ")
    };

    setSelectedFloor(floorObject);
  };

  useEffect(() => {
    if (pathname === "/") {
      setIsFloorSelected(false);
    } else {
      setIsFloorSelected(true);
      setUpFloorObject();
    }
  }, [pathname]);

  return (
    <div className={classes["floor-view"]}>
      <Header location={selectedFloor} />
      <FloorStatus />
    </div>
  );
}

FloorView.propTypes = {};

export default FloorView;
