import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";

import LocationsTree from "components/ui/locations-tree/LocationsTree";
import FloorView from "components/views/floor-view/FloorView";
import SelectionPrompt from "./components/selection-prompt/SelectionPrompt";
import AnalogClock from "./components/analog-clock/AnalogClock";

import classes from "./MainView.module.scss";

function MainView() {
  const { pathname } = useLocation();
  const [renderFloor, setRenderFloor] = useState(null);
  const [renderPrompt, setRenderPrompt] = useState(true);

  useEffect(() => {
    if (pathname === "/main-view") {
      setRenderPrompt(true);
      setRenderFloor(false);
    } else if (pathname.includes("floor")) {
      setRenderPrompt(false);
      setRenderFloor(true);
    }
  }, [pathname]);

  return (
    <div className={classes["main-view"]}>
      <LocationsTree />
      {renderFloor && <FloorView />}
      {/* {renderFloor ? <AnalogClock /> : null} */}
      <SelectionPrompt open={renderPrompt} />
    </div>
  );
}

export default MainView;
