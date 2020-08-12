import React from "react";
import PropTypes from "prop-types";

import Sensor from "../../../../components/sensor/Sensor";

import classes from "./Legend.module.scss";

function Legend(props) {
  return (
    <div className={classes["legend"]}>
      <div className={classes["legend-sensor"]}>
        <Sensor status="BUSY" sensorClass={classes["busy"]} />
        <span className={classes["legend-sensor-label"]}>Occupied</span>
      </div>
      <div className={classes["legend-sensor"]}>
        <Sensor status="FREE" sensorClass={classes["free"]} />
        <span className={classes["legend-sensor-label"]}>Vacant</span>
      </div>
      <div className={classes["legend-sensor"]}>
        <Sensor sensorClass={classes["off-period"]} />
        <span className={classes["legend-sensor-label"]}>Off period</span>
      </div>
    </div>
  );
}

Legend.propTypes = {};

export default Legend;
