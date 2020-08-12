import React, { useEffect, useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import { useSubscription } from "@apollo/client";

import LocationsContext from "contexts/locations-context/LocationsContext";
import { LOCATIONS_SUBSCRIPTION } from "queries/queries";

import SelectionPrompt from "./components/selection-prompt/SelectionPrompt";

import classes from "./MainView.module.scss";

function MainView() {
  const { pathname } = useLocation();
  const [renderPrompt, setRenderPrompt] = useState(true);
  const { locations, setLocations } = useContext(LocationsContext);

  const { data, loading } = useSubscription(LOCATIONS_SUBSCRIPTION, {
    variables: {}
  });

  useEffect(() => {
    if (data) {
      setLocations(data.ClientsInfoUpdated);
    }

    console.log("MainView, USE EFFECT, DATA", data);
    console.log("MainView, USE EFFECT, loading", loading);
  }, [data]);

  useEffect(() => {
    const decodedPathname = decodeURIComponent(pathname);

    if (decodedPathname === "/main-view") {
      setRenderPrompt(true);
    } else if (decodedPathname.split("/").length === 5) {
      setRenderPrompt(false);
    }
  }, [pathname]);

  return (
    <div className={classes["main-view"]}>
      {renderPrompt && <SelectionPrompt />}
      {/* <SelectionPrompt /> */}
    </div>
  );
}

export default MainView;
