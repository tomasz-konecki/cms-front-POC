import React from "react";
import LocalizationsTree from "components/locations-tree/LocationsTree";
import RoomView from "components/room-view/RoomView";

import classes from "./MainView.module.scss";

function MainView() {
  return (
    <div className={classes["main-view"]}>
      <LocalizationsTree />
      <RoomView />
    </div>
  );
}

export default MainView;
