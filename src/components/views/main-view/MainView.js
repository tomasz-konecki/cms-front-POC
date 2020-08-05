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
  // const [locations, setLocations] = useState([]);
  const { pathname } = useLocation();
  const [renderFloor, setRenderFloor] = useState(null);
  const [renderMapView, setRenderMapView] = useState(false);
  const [renderPrompt, setRenderPrompt] = useState(true);
  const { locations, setLocations } = useContext(LocationsContext);
  const [selectedMap, setSelectedMap] = useState("");

  const { data: locationsData, loading, error } = useQuery(GET_ALL_LOCATIONS);

  const handleMapSelection = mapPath => {
    setSelectedMap(mapPath);
    setRenderPrompt(false);
    setRenderMapView(true);
  };

  const closeMapView = () => {
    setRenderMapView(false);
  };

  useEffect(() => {
    if (locationsData) {
      setLocations(locationsData.ClientsInfo);
    }
  }, [locationsData]);

  useEffect(() => {
    if (pathname === "/main-view") {
      setRenderPrompt(true);
      setRenderFloor(false);
    } else if (pathname.split("/").length === 5) {
      setRenderPrompt(false);
      setRenderFloor(true);
    }
  }, [pathname]);

  return (
    <div className={classes["main-view"]}>
      <LocationsTree locations={locations} loading={loading} />
      {renderFloor && <FloorView handleMapSelection={handleMapSelection} />}
      {renderMapView && (
        <MapView selectedMap={selectedMap} closeMapView={closeMapView} />
      )}
      {renderPrompt && <SelectionPrompt />}
    </div>
  );
}

export default MainView;
