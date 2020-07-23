import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "./components/header/Header";

import classes from "./RoomView.module.scss";
import SpaceStatus from "./components/space-status/SpaceStatus";

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

  const setUpRoomObject = () => {
    const locationArray = pathname.split("/");

    const roomObject = {
      parentLocation: locations[locationArray[1]],
      site: locationArray[2].replace(/-/g, " "),
      floor: locationArray[3].replace("-", " "),
      room: locationArray[4].replace("-", " ")
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
      {isRoomSelected ? (
        <>
          <Header selectedRoom={selectedRoom} />
          <SpaceStatus />
        </>
      ) : (
        <div className={classes["room-view-selection-prompt"]}>
          Please select location
        </div>
      )}
    </div>
  );
}

export default RoomView;
