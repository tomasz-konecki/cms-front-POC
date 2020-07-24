import React from "react";
import { Paper } from "@material-ui/core";
import PropTypes from "prop-types";
import HeatMap from "react-heatmap-grid";

import classes from "./FloorStatus.module.scss";

function FloorStatus(props) {
  const xLabels = ["Room 1", "Room 2"];
  const yLabels = ["Mon", "Tue", "Wed", "Thu", "Fri"];
  const data = new Array(yLabels.length)
    .fill(0)
    .map(() =>
      new Array(xLabels.length)
        .fill(0)
        .map(() => Math.floor(Math.random() * 100))
    );

  return (
    <div className={classes["floor-status"]}>
      <div>
        <Paper
          elevation={3}
          classes={{ root: classes["floor-status-container"] }}
        >
          <div className={classes["floor-status-title"]}>
            Current occupancy status
          </div>
          <Paper classes={{ root: classes["floor-status-values"] }}>
            <table>
              <tbody>
                <tr className={classes["total"]}>
                  <td className={classes["td-width"]}>Room 1:</td>
                  <td align="right">45%</td>
                </tr>
                <tr className={classes["occupied"]}>
                  <td className={classes["td-width"]}>Room 2:</td>
                  <td align="right">77%</td>
                </tr>
              </tbody>
            </table>
          </Paper>
        </Paper>
      </div>

      <div className={classes["heat-map"]}>
        <div className={classes["heat-map-label"]}>
          Last week occupancy status:
        </div>
        <HeatMap
          xLabels={xLabels}
          yLabels={yLabels}
          data={data}
          background="darkorange"
          xLabelsLocation="bottom"
          unit="%"
        />
      </div>
    </div>
  );
}

FloorStatus.propTypes = {};

export default FloorStatus;
