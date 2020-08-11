import React from "react";
import { number } from "prop-types";

import classes from "./StatusBoard.module.scss";

function StatusBoard({ total, occupied, vacant, offPeriod }) {
  return (
    <div className={classes["status-board"]}>
      <div className={classes["status-title"]}>Current occupancy status</div>
      <div className={classes["status-values"]}>
        <table>
          <tbody>
            <tr className={classes["total"]}>
              <td className={classes["td-width"]}>Total:</td>
              <td align="right">{total}</td>
            </tr>
            <tr className={classes["occupied"]}>
              <td className={classes["td-width"]}>Occupied:</td>
              <td align="right">{occupied}</td>
            </tr>
            <tr className={classes["vacant"]}>
              <td className={classes["td-width"]}>Vacant:</td>
              <td align="right">{vacant}</td>
            </tr>
            <tr className={classes["off-period"]}>
              <td className={classes["td-width"]}>Off Period:</td>
              <td align="right">{offPeriod || "0"}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

StatusBoard.propTypes = {
  total: number,
  occupied: number,
  vacant: number,
  offPeriod: number
};

export default StatusBoard;
