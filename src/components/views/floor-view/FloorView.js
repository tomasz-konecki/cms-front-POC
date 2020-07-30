// @ts-nocheck
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { gql, useQuery, useLazyQuery } from "@apollo/client";
import Header from "../main-view/components/header/Header";
import StatusBoard from "./components/status-board/StatusBoard";
import HeatMapGrid from "./components/heat-map-grid/HeatMapGrid";

import { occupancyData } from "data/occupancyData";

import classes from "./FloorView.module.scss";

function FloorView() {
  const [selectedFloor, setSelectedFloor] = useState({
    parentLocation: "",
    site: "",
    floor: "",
    room: ""
  });
  const [isFloorSelected, setIsFloorSelected] = useState(false);
  const [occupied, setOccupied] = useState(null);
  const [vacant, setVacant] = useState(null);
  const { pathname } = useLocation();

  const GET_SENSORS = gql`
    query GetSensors($limit: Int) {
      SensorEntries(limit: $limit) {
        parentName
        sensorType
        parentPath
        createdAt
        status
      }
    }
  `;

  // const { data, loading, error } = useQuery(GET_SENSORS, {
  //   variables: { limit: 15 }
  // });

  const [getSensors, { loading, data }] = useLazyQuery(GET_SENSORS);

  console.log(">>> GET_SENSORS DATA:", data);

  const setUpRoomObject = () => {
    const locationArray = pathname.split("/");

    if (locationArray.length > 2) {
      const floorObject = {
        parentLocation: locationArray[1].replace(/-/g, " "),
        site: locationArray[2].replace(/-/g, " "),
        floor:
          locationArray[3] === "floor-gnd"
            ? "Ground Floor"
            : locationArray[3].replace("-", " ")
      };

      setSelectedFloor(floorObject);
    }
  };

  useEffect(() => {
    if (pathname === "/") {
      setIsFloorSelected(false);
    } else {
      setIsFloorSelected(true);
      setUpRoomObject();
    }
  }, [pathname]);

  useEffect(() => {
    const locationArray = pathname.split("/");

    if (locationArray.length > 2) {
      const location = locationArray[2];
      const floor = locationArray[3];
      const status = occupancyData[location][floor];

      setOccupied(status.occupied);
      setVacant(status.vacant);
    }
  }, [pathname]);

  return (
    <div className={classes["floor-view"]}>
      {isFloorSelected && (
        <>
          <Header location={selectedFloor} />
          <div
            className={classes["floor-status"]}
            onClick={() =>
              getSensors({
                variables: { limit: 15 }
              })
            }
          >
            <StatusBoard occupied={occupied} vacant={vacant} />
            <HeatMapGrid occupied={occupied} vacant={vacant} />
          </div>
        </>
      )}
    </div>
  );
}

export default FloorView;
