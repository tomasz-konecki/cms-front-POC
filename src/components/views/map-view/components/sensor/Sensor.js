import React from "react";
import { object } from "prop-types";

import classes from "./Sensor.module.scss";
import { sensors } from "data/sensors";

function Sensor({ sensor }) {
  return (
    <div
      className={classes["sensor"]}
      style={{ top: `${sensor.y - 8}px`, left: `${sensor.x - 7}px` }}
      onClick={() => alert("Sensor index:" + sensor.index)}
    ></div>
  );
}

Sensor.propTypes = {
  sensor: object
};

export default Sensor;
