import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import Header from "../main-view/components/header/Header";
import RoomStatus from "./components/room-status/RoomStatus";

import classes from "./RoomView.module.scss";

const locations = {
  boi: "Bank Of Ireland",
  intevi: "Intevi"
};

function RoomView() {
  const [selectedRoom, setSelectedRoom] = useState({
    parentLocation: "",
    site: "",
    floor: "",
    room: ""
  });
  const [isRoomSelected, setIsRoomSelected] = useState(false);
  const { pathname } = useLocation();

  const SENSORS = gql`
    query GetSensors {
      SensorEntries {
        parentName
        sensorType
        parentPath
        createdAt
        status
      }
    }
  `;

  const { data, loading, error } = useQuery(SENSORS);

  useEffect(() => {
    if (data) {
      console.log(data.SensorEntries);
    }
    if (error) {
      console.log(error.message);
    }
  }, [data, error]);

  const setUpRoomObject = () => {
    const locationArray = pathname.split("/");

    const roomObject = {
      parentLocation: locations[locationArray[1]],
      site: locationArray[2].replace(/-/g, " "),
      floor: locationArray[3].replace("-", " "),
      room: locationArray[4] ? locationArray[4].replace("-", " ") : ""
    };

    setSelectedRoom(roomObject);
  };

  useEffect(() => {
    if (pathname === "/") {
      setIsRoomSelected(false);
    } else {
      setIsRoomSelected(true);
      setUpRoomObject();
    }
  }, [pathname]);

  return (
    <div className={classes["room-view"]}>
      {isRoomSelected && (
        <>
          <Header location={selectedRoom} />
          <RoomStatus />
        </>
      )}
    </div>
  );
}

export default RoomView;
