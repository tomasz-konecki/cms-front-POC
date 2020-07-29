import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";

import LocationsTree from "components/ui/locations-tree/LocationsTree";
import FloorView from "components/views/floor-view/FloorView";
import SelectionPrompt from "./components/selection-prompt/SelectionPrompt";
import AnalogClock from "./components/analog-clock/AnalogClock";

import classes from "./MainView.module.scss";

function MainView() {
  const { pathname } = useLocation();
  const [renderFloor, setRenderFloor] = useState(null);
  const [renderPrompt, setRenderPrompt] = useState(true);

  // const SENSORS = gql`
  //   query GetSensors {
  //     SensorEntries {
  //       parentName
  //       sensorType
  //       parentPath
  //       createdAt
  //       status
  //     }
  //   }
  // `;

  // const { data, loading, error } = useQuery(SENSORS);

  // useEffect(() => {
  //   if (data) {
  //     console.log(data.SensorEntries);
  //   }
  //   if (error) {
  //     console.log(error.message);
  //   }
  // }, [data, error]);

  useEffect(() => {
    if (pathname === "/main-view") {
      setRenderPrompt(true);
      setRenderFloor(false);
    } else if (pathname.includes("floor")) {
      setRenderPrompt(false);
      setRenderFloor(true);
    }
  }, [pathname]);

  return (
    <div className={classes["main-view"]}>
      <LocationsTree />
      {renderFloor && <FloorView />}
      {/* {renderFloor ? <AnalogClock /> : null} */}
      <SelectionPrompt open={renderPrompt} />
    </div>
  );
}

export default MainView;
