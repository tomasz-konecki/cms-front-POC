// @ts-nocheck
import React from "react";
import { number } from "prop-types";
import Scrollbars from "react-custom-scrollbars";
import HeatMap from "react-heatmap-grid";

import classes from "./HeatMapGrid.module.scss";

function HeatMapGrid({ occupied, vacant }) {
  const total = occupied + vacant;

  const yLabels = new Array(total).fill(0).map((_, i) => `${i + 1}`);
  const xLabels = ["Mon", "Tue", "Wed", "Thu", "Fri"];
  const heatMapData = new Array(yLabels.length)
    .fill(0)
    .map(() =>
      new Array(xLabels.length)
        .fill(0)
        .map(() => Math.floor(Math.random() * 100))
    );

  return (
    <div className={classes["heat-map-grid"]}>
      <div className={classes["heat-map-grid-label"]}>
        Last week occupancy status:
      </div>
      <Scrollbars
        autoHeight
        autoHeightMax="45vh"
        className={classes["scrollbar"]}
      >
        <HeatMap
          xLabels={xLabels}
          yLabels={yLabels}
          data={heatMapData}
          background="darkorange"
          xLabelsLocation="top"
          unit="%"
          // height="120"
        />
      </Scrollbars>
    </div>
  );
}

HeatMapGrid.propTypes = {
  occupied: number,
  vacant: number
};

export default HeatMapGrid;
