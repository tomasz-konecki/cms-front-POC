import React, { useEffect, useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import { useQuery } from "@apollo/client";
import LocationsContext from "contexts/locations-context/LocationsContext";
import { GET_ALL_LOCATIONS } from "queries/queries";

import LocationsTree from "components/ui/locations-tree/LocationsTree";
import FloorView from "components/views/floor-view/FloorView";
import SelectionPrompt from "./components/selection-prompt/SelectionPrompt";
import MapView from "../map-view/MapView";

import classes from "./MainView.module.scss";

function MainView() {
  const { pathname } = useLocation();
  const [renderFloor, setRenderFloor] = useState(null);
  const [renderMapView, setRenderMapView] = useState(false);
  const [renderPrompt, setRenderPrompt] = useState(true);
  const { locations, setLocations } = useContext(LocationsContext);

  const { data: locationsData, loading, error } = useQuery(GET_ALL_LOCATIONS);

  useEffect(() => {
    if (locationsData) {
      setLocations(locationsData.ClientsInfo);
    }
  }, [locationsData]);

  useEffect(() => {
    const decodedPathname = decodeURIComponent(pathname);

    if (decodedPathname === "/main-view") {
      setRenderPrompt(true);
      setRenderFloor(false);
    } else if (decodedPathname.split("/").length === 5) {
      setRenderPrompt(false);
      setRenderFloor(true);
    }
  }, [pathname]);

  return (
    <div className={classes["main-view"]}>
      <LocationsTree locations={locations} loading={loading} />
      {renderFloor && <FloorView />}
      {renderMapView && <MapView />}
      {renderPrompt && <SelectionPrompt />}
    </div>
  );
}

export default MainView;
