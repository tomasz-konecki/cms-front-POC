// @ts-nocheck
import React from "react";
import { func } from "prop-types";
import { useLocation } from "react-router-dom";

import MapsPreview from "./components/map-preview/MapsPreview";

import previews from "data/previews";

import classes from "./FloorView.module.scss";

function FloorView({ handleMapSelection }) {
  const { pathname } = useLocation();

  return (
    <div className={classes["floor-view"]}>
      <div className={classes["floor-status"]}>
        <MapsPreview
          previews={previews[decodeURIComponent(pathname)]}
          handleMapSelection={handleMapSelection}
        />
      </div>
    </div>
  );
}

FloorView.propTypes = {
  handleMapSelection: func
};

export default FloorView;
