import React from "react";

import classes from "./TopBar.module.scss";

function TopBar() {
  return (
    <div className={classes["top-bar"]}>
      <span className={classes["app-name"]}>CONNECTED SPACE MANAGEMENT</span>
      <span className={classes["log-out"]}>Log Out</span>
    </div>
  );
}

export default TopBar;
