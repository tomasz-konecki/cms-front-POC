import React from "react";
import PropTypes from "prop-types";

import { sensors } from "data/sensors";
import map from "assets/maps/baggot-plaza/bpl_f1_c3.png";

import Sensor from "./components/sensor/Sensor";

import classes from "./MapView.module.scss";

function MapView(props) {
  return (
    <div>
      <div className={classes["map-view"]}>
        <div className={classes["map-img-container"]}>
          <img src={map} />
        </div>

        {sensors.map(sensor => (
          <Sensor sensor={sensor} />
        ))}
      </div>
    </div>
  );
}

MapView.propTypes = {};

export default MapView;
