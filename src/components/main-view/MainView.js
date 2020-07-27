import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";

import LocalizationsTree from "components/locations-tree/LocationsTree";
import FloorView from "components/floor-view/FloorView";
import RoomView from "components/room-view/RoomView";
import SelectionPrompt from "./components/selection-prompt/SelectionPrompt";
import AnalogClock from "./components/analog-clock/AnalogClock";

import classes from "./MainView.module.scss";

function MainView() {
  const { pathname } = useLocation();
  const [renderRoom, setRenderRoom] = useState(null);
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
    if (pathname === "/") {
      setRenderPrompt(true);
      setRenderFloor(false);
      setRenderRoom(false);
    } else if (pathname.includes("floor") && !pathname.includes("room")) {
      setRenderPrompt(false);
      setRenderRoom(false);
      setRenderFloor(true);
    } else if (pathname.includes("floor") && pathname.includes("room")) {
      setRenderPrompt(false);
      setRenderFloor(false);
      setRenderRoom(true);
    }
  }, [pathname]);

  return (
    <div className={classes["main-view"]}>
      <LocalizationsTree />
      {renderFloor && <FloorView />}
      {renderRoom && <RoomView />}
      {renderFloor || renderRoom ? <AnalogClock /> : null}
      <SelectionPrompt open={renderPrompt} />
    </div>
  );
}

export default MainView;
