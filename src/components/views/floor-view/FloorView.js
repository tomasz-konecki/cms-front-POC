// @ts-nocheck
import React, { useEffect, useState } from "react";
import { func } from "prop-types";
import { useLocation } from "react-router-dom";
import { useQuery, useLazyQuery } from "@apollo/client";

import { GET_ALL_LOCATIONS, GET_LOCATIONS, GET_SENSORS } from "queries/queries";

import Header from "../main-view/components/header/Header";
import StatusBoard from "./components/status-board/StatusBoard";
import HeatMapGrid from "./components/heat-map-grid/HeatMapGrid";
import MapView from "../map-view/MapView";
import MapsPreview from "./components/map-preview/MapsPreview";

import previews from "data/previews";

import classes from "./FloorView.module.scss";

function FloorView({ handleMapSelection }) {
  const [isFloorSelected, setIsFloorSelected] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/") {
      setIsFloorSelected(false);
    } else {
      setIsFloorSelected(true);
    }
  }, [pathname]);

  return (
    <div className={classes["floor-view"]}>
      {isFloorSelected && (
        <>
          {/* <Header location={selectedFloor} /> */}
          <div
            className={classes["floor-status"]}
            // onClick={() =>
            //   getSensors({
            //     variables: { limit: 15 }
            //   })
            // }
          >
            {/* <StatusBoard occupied={occupied} vacant={vacant} /> */}
            {/* <HeatMapGrid occupied={occupied} vacant={vacant} /> */}

            <MapsPreview
              previews={previews[pathname]}
              handleMapSelection={handleMapSelection}
            />
            {/* <MapView /> */}
          </div>
        </>
      )}
    </div>
  );
}

FloorView.propTypes = {
  handleMapSelection: func
};

export default FloorView;
