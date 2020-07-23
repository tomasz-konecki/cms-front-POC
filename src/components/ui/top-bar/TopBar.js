import React from "react";

import classes from "./TopBar.module.scss";
import useCurrentTime from "components/hooks/useCurrentTime";

function TopBar() {
  const currentTime = useCurrentTime();

  return (
    <div className={classes["top-bar"]}>
      CONNECTED SPACE MANAGEMENT (POC)
      <div>{currentTime}</div>
    </div>
  );
}

export default TopBar;
