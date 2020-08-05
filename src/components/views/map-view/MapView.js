import React, { useEffect, useState } from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import { useHistory } from "react-router-dom";

import useQuery from "hooks/useQuery";
import { sensors } from "data/sensors";
import previews from "data/previews";

import Sensor from "./components/sensor/Sensor";

import classes from "./MapView.module.scss";

function MapView() {
  const [src, setSrc] = useState(null);
  const query = useQuery();
  let history = useHistory();

  useEffect(() => {
    const mapPath = query.get("map");
    const queryArray = mapPath.split("/");
    queryArray.pop();
    const previewKey = `/${queryArray.join("/")}`;
    const imgSource = previews[previewKey].filter(
      item => item.path === mapPath
    )[0].src;

    setSrc(imgSource);
  }, [query]);

  return (
    <>
      <div className={classes["close"]} onClick={() => history.goBack()}>
        {`<`}
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

MapView.propTypes = {};

export default MapView;
