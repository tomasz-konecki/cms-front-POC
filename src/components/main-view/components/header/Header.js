import React from "react";
import { object } from "prop-types";

import classes from "./Header.module.scss";

function Header({ location }) {
  const { parentLocation, site, floor, room } = location;

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
        {room && <span className={classes["arrow"]}>&nbsp;</span>}
      </div>
      {room && <div className={classes["room-view-header-room"]}>{room}</div>}
    </div>
  );
}

Header.propTypes = {
  location: object
};

export default Header;
