import React from "react";
import { Paper } from "@material-ui/core";
import PropTypes from "prop-types";
import HeatMap from "react-heatmap-grid";

import classes from "./RoomStatus.module.scss";

function RoomStatus(props) {
  const xLabels = new Array(20).fill(0).map((_, i) => `${i + 1}`);
  const yLabels = ["Mon", "Tue", "Wed", "Thu", "Fri"];
  const data = new Array(yLabels.length)
    .fill(0)
    .map(() =>
      new Array(xLabels.length)
        .fill(0)
        .map(() => Math.floor(Math.random() * 100))
    );

  return (
    <div className={classes["room-status"]}>
      <div>
        <Paper
          elevation={3}
          classes={{ root: classes["room-status-container"] }}
        >
          <div className={classes["room-status-title"]}>
            Current occupancy status
          </div>
          <Paper classes={{ root: classes["room-status-values"] }}>
            <table>
              <tbody>
                <tr className={classes["total"]}>
                  <td className={classes["td-width"]}>Total:</td>
                  <td align="right">20</td>
                </tr>
                <tr className={classes["occupied"]}>
                  <td className={classes["td-width"]}>Occupied:</td>
                  <td align="right">11</td>
                </tr>
                <tr className={classes["vacant"]}>
                  <td className={classes["td-width"]}>Vacant:</td>
                  <td align="right">9</td>
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
          // height="120"
        />
      </div>
    </div>
  );
}

RoomStatus.propTypes = {};

export default RoomStatus;
