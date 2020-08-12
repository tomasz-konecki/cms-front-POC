import React from "react";
import { object, string } from "prop-types";
import clsx from "clsx";

import classes from "./Sensor.module.scss";

function Sensor({ sensor, status, sensorClass }) {
  return (
    <div
      className={clsx(classes["sensor"], {
        [classes["red"]]: status === "BUSY",
        [classes["green"]]: status === "FREE",
        [sensorClass]: sensorClass
      })}
      style={
        sensor ? { top: `${sensor.y - 8}px`, left: `${sensor.x - 7}px` } : null
      }
    >
      <span>{sensor ? sensor.index : null}</span>
    </div>
  );
}

Sensor.propTypes = {
  sensor: object,
  status: string
};

export default Sensor;
