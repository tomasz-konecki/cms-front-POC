import React, { useEffect, useState, useContext } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

import useQuery from "hooks/useQuery";
import { sensors } from "data/sensors/sensors";
import previews from "data/previews";
import LocationsContext from "contexts/locations-context/LocationsContext";

import NavTools from "./components/nav-tools/NavTools";
import Sensor from "./components/sensor/Sensor";
import BackArrow from "./components/back-arrow/BackArrow";
import StatusBoard from "./components/status-board/StatusBoard";

import classes from "./MapView.module.scss";

function MapView() {
  const { locations } = useContext(LocationsContext);
  const [mapImage, setMapImage] = useState(null);
  const [mapSensors, setMapSensors] = useState([]);
  const query = useQuery();
  const [sitePath, setSitePath] = useState("");
  const [floorPath, setFloorPath] = useState("");
  const [compartmentPath, setCompartmentPath] = useState("");
  const [siteObject, setSiteObject] = useState({ subLocalizations: [] });
  const [compartmentObject, setCompartmentObject] = useState({
    subLocalizations: []
  });
  const [benches, setBenches] = useState([]);
  const [desks, setDesks] = useState([]);
  let occupied = 0;
  let vacant = 0;
  let offPeriod = 0;

  const setMapImageSource = (mapPath, queryArray) => {
    queryArray.pop();
    const previewKey = `${queryArray.join("/")}`;
    const imgSource = previews[previewKey].filter(
      item => item.path === mapPath
    )[0].src;

    setMapImage(imgSource);
  };

  const createSitePath = queryArray => {
    queryArray.pop();
    setSitePath(queryArray.join("/"));
  };

  const createFloorPath = () => {
    const compartmentPathArray = compartmentPath.split("/");
    compartmentPathArray.pop();
    const floor = compartmentPathArray.join("/");

    setFloorPath(floor);
  };

  const findSite = () => {
    let siteObj = { subLocalizations: [] };

    locations.forEach(location => {
      location.sites.forEach(site => {
        if (site.path === sitePath) {
          siteObj = site.path === sitePath ? site : {};
        }
      });
    });

    setSiteObject(siteObj);
  };

  const findFloor = () => {
    const sublocalizationsArray = siteObject.subLocalizations || [];
    let floorObj = { subLocalizations: [] };

    sublocalizationsArray.forEach(item => {
      if (item.path === floorPath) {
        floorObj = item;
      }
    });

    return floorObj;
  };

  const findCompartment = () => {
    const floorObject = findFloor();
    const floorSublocalizationsArray = floorObject.subLocalizations || [];
    let compartmentObj = { subLocalizations: [] };

    floorSublocalizationsArray.forEach(item => {
      if (item.path === compartmentPath) {
        compartmentObj = item;
      }
    });

    setCompartmentObject(compartmentObj);
  };

  const findBenches = () => {
    const roomsArray = compartmentObject.subLocalizations || [];
    let benchesArray = [];

    roomsArray.forEach(room => {
      benchesArray = [...benchesArray, ...room.subLocalizations];
    });

    setBenches(benchesArray);
  };

  const findDesks = () => {
    let desksArray = [];

    benches.forEach(bench => {
      desksArray = [...desksArray, ...bench.subLocalizations];
    });

    setDesks(desksArray);
  };

  const getSensorStatus = sensorPath => {
    let deskObj = { status: null };
    let deskStatus = "";
    deskObj = desks.find(desk => desk.path === sensorPath);
    deskStatus = deskObj.status;

    return deskStatus;
  };

  useEffect(() => {
    const mapPath = query.get("map");
    const queryArray = mapPath.split("/");

    setMapSensors(sensors[mapPath]);
    setCompartmentPath(mapPath);
    setMapImageSource(mapPath, queryArray);
    createSitePath(queryArray);
    createFloorPath();
    findSite();
  }, [query]);

  useEffect(() => {
    findCompartment();
  }, [siteObject]);

  useEffect(() => {
    findBenches();
  }, [compartmentObject]);

  useEffect(() => {
    findDesks();
  }, [benches]);

  return desks.length ? (
    <div className={classes["map-modal"]}>
      <TransformWrapper
        defaultScale={1}
        positionX={100}
        wheel={{
          step: 200
        }}
        options={{
          limitToBounds: false,
          minScale: 0.5,
          maxScale: 4
        }}
      >
        {({
          zoomIn,
          zoomOut,
          resetTransform,
          positionX,
          positionY,
          setPositionY,
          scale,
          ...rest
        }) => (
          <div className={classes["map"]}>
            <BackArrow />
            <StatusBoard desks={desks} />
            <TransformComponent>
              <div className={classes["map-container"]}>
                <div className={classes["map-img-container"]}>
                  <img src={mapImage} className={classes["map-img"]} />
                  {mapSensors.map(sensor => (
                    <Sensor
                      key={sensor.path}
                      sensor={sensor}
                      status={getSensorStatus(sensor.path)}
                    />
                  ))}
                </div>
              </div>
            </TransformComponent>
            <NavTools
              zoomIn={zoomIn}
              zoomOut={zoomOut}
              resetTransform={resetTransform}
              positionX={positionX}
              positionY={positionY}
              setPositionY={setPositionY}
              scale={scale}
            />
          </div>
        )}
      </TransformWrapper>
    </div>
  ) : null;
}

MapView.propTypes = {};

export default MapView;
