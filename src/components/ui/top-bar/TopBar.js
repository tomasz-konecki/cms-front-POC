import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

import LocationsContext from "contexts/locations-context/LocationsContext";

import classes from "./TopBar.module.scss";

function TopBar() {
  const { push } = useHistory();
  const { locations, setLocations } = useContext(LocationsContext);

  const handleLogOut = () => {
    setLocations([]);
    push("/");
    sessionStorage.clear();
  };

  return (
    <div className={classes["top-bar"]}>
      <span className={classes["app-name"]}>CONNECTED SPACE MANAGEMENT</span>
      {locations.length > 0 && (
        <span className={classes["log-out"]} onClick={handleLogOut}>
          Log Out
        </span>
      )}
    </div>
  );
}

export default TopBar;
