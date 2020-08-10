import React from "react";
import { object, string } from "prop-types";
import clsx from "clsx";

import classes from "./Sensor.module.scss";

function Sensor({ sensor, status }) {
  return (
    <div
      className={clsx(classes["sensor"], {
        [classes["red"]]: status === "BUSY",
        [classes["green"]]: status === "FREE"
      })}
      style={{ top: `${sensor.y - 8}px`, left: `${sensor.x - 7}px` }}
      onClick={() => alert("Sensor index:" + sensor.index)}
    >
      {/* {sensor.index} */}
    </div>
  );
}

Sensor.propTypes = {
  sensor: object,
  status: string
};

export default Sensor;
