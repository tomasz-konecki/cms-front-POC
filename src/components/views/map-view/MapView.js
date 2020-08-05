import React, { useEffect, useState } from "react";
import { string, func } from "prop-types";
import { useLocation } from "react-router-dom";
import ScrollContainer from "react-indiana-drag-scroll";

import { sensors } from "data/sensors";
import previews from "data/previews";

import Sensor from "./components/sensor/Sensor";

import classes from "./MapView.module.scss";

function MapView({ selectedMap, closeMapView }) {
  const { pathname } = useLocation();
  const [src, setSrc] = useState(null);

  useEffect(() => {
    const mapImageSource = previews[pathname].filter(
      item => item.path === selectedMap
    )[0].src;

    setSrc(mapImageSource);
  }, [selectedMap]);

  return (
    <>
      <div className={classes["close"]} onClick={closeMapView}>
        X
      </div>
      <div className={classes["map-view-modal"]}>
        <ScrollContainer className={classes["scroll-container"]}>
          <div className={classes["map-view"]}>
            <div className={classes["map-img-container"]}>
              <img src={src} />
            </div>

            {sensors.map(sensor => (
              <Sensor sensor={sensor} />
            ))}
          </div>
        </ScrollContainer>
      </div>
    </>
  );
}

MapView.propTypes = {
  selectedMap: string,
  closeMapView: func
};

export default MapView;
