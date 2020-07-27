import React from "react";
import { number } from "prop-types";

import classes from "./StatusBoard.module.scss";

function StatusBoard({ occupied, vacant }) {
  return (
    <div>
      <div className={classes["floor-status-container"]}>
        <div className={classes["floor-status-title"]}>
          Current occupancy status
        </div>
        <div className={classes["floor-status-values"]}>
          <table>
            <tbody>
              <tr className={classes["total"]}>
                <td className={classes["td-width"]}>Total:</td>
                <td align="right">{occupied + vacant}</td>
              </tr>
              <tr className={classes["occupied"]}>
                <td className={classes["td-width"]}>Occupied:</td>
                <td align="right">{occupied}</td>
              </tr>
              <tr className={classes["vacant"]}>
                <td className={classes["td-width"]}>Vacant:</td>
                <td align="right">{vacant}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

StatusBoard.propTypes = {
  occupied: number,
  vacant: number
};

export default StatusBoard;
