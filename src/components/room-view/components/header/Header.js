import React from "react";
import { object } from "prop-types";

import classes from "./Header.module.scss";

function Header({ selectedRoom }) {
  const { parentLocation, site, floor, room } = selectedRoom;

  return (
    <div className={classes["room-view-header"]}>
      <div className={classes["room-view-header-title"]}>Location:</div>
      <div className={classes["room-view-header-location"]}>
        {parentLocation}
        <span className={classes["arrow"]}>&nbsp;</span>
      </div>
      <div className={classes["room-view-header-site"]}>
        {site}
        <span className={classes["arrow"]}>&nbsp;</span>
      </div>
      <div className={classes["room-view-header-floor"]}>
        {floor}
        <span className={classes["arrow"]}>&nbsp;</span>
      </div>
      <div className={classes["room-view-header-room"]}>{room}</div>
    </div>
  );
}

Header.propTypes = {
  selectedRoom: object
};

export default Header;
