import React from "react";
import { object } from "prop-types";

import classes from "./Header.module.scss";

function Header({ location }) {
  const { parentLocation, site, floor } = location;

  return (
    <div className={classes["floor-view-header"]}>
      <div className={classes["floor-view-header-title"]}>Location:</div>
      <div className={classes["floor-view-header-location"]}>
        {parentLocation}
        <span className={classes["arrow"]}>&nbsp;</span>
      </div>
      <div className={classes["floor-view-header-site"]}>
        {site}
        <span className={classes["arrow"]}>&nbsp;</span>
      </div>
      <div className={classes["floor-view-header-floor"]}>
        {floor}
        {floor && <span className={classes["arrow"]}>&nbsp;</span>}
      </div>
      {floor && (
        <div className={classes["floor-view-header-floor"]}>{floor}</div>
      )}
    </div>
  );
}

Header.propTypes = {
  location: object
};

export default Header;
