import React, { useEffect, useState, useContext } from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import { useHistory } from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

import useQuery from "hooks/useQuery";
import { sensors } from "data/sensors/sensors";
import previews from "data/previews";
import LocationsContext from "contexts/locations-context/LocationsContext";

import Sensor from "./components/sensor/Sensor";

import classes from "./MapView.module.scss";

function MapView() {
  const { locations } = useContext(LocationsContext);
  const [mapImage, setMapImage] = useState(null);
  const [mapSensors, setMapSensors] = useState([]);
  const query = useQuery();
  const history = useHistory();
  const [sitePath, setSitePath] = useState("");
  const [floorPath, setFloorPath] = useState("");
  const [compartmentPath, setCompartmentPath] = useState("");
  const [siteObject, setSiteObject] = useState({ subLocalizations: [] });
  const [compartmentObject, setCompartmentObject] = useState({
    subLocalizations: []
  });
  const [benches, setBenches] = useState([]);
  const [desks, setDesks] = useState([]);

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

  return (
    <>
      <div className={classes["close"]} onClick={() => history.goBack()}>
        <ArrowBackIosIcon />
      </div>
      {desks.length > 0 && (
        <div className={classes["map-view"]}>
          <ScrollContainer className={classes["scroll-container"]}>
            <div className={classes["map"]}>
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
          </ScrollContainer>
        </div>
      )}
    </>
  );
}

MapView.propTypes = {};

export default MapView;
