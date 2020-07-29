import React from "react";
import { object } from "prop-types";
import useCurrentTime from "components/hooks/useCurrentTime";

import classes from "./Header.module.scss";

function Header({ location }) {
  const { parentLocation, site, floor } = location;
  const currentTime = useCurrentTime();

  return (
    <div className={classes["floor-view-header"]}>
      <div className={classes["floor-view-header-location"]}>
        <div className={classes["floor-view-header-location-label"]}>
          Location:
        </div>
        <div className={classes["floor-view-header-location-main"]}>
          {parentLocation}
          <span className={classes["arrow"]}>&nbsp;</span>
        </div>
        <div className={classes["floor-view-header-location-site"]}>
          {site}
          <span className={classes["arrow"]}>&nbsp;</span>
        </div>
        <div className={classes["floor-view-header-location-floor"]}>
          {floor}
        </div>
      </div>
      <div>{currentTime}</div>
    </div>
  );
}

Header.propTypes = {
  location: object
};

export default Header;
