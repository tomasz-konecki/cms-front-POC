import React, { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { GET_ALL_LOCATIONS } from "queries/queries";
import LocationsContext from "contexts/locations-context/LocationsContext";

import classes from "./Home.module.scss";
import ThreeDots from "components/ui/loader/three-dots/ThreeDots";

function Home() {
  const { push } = useHistory();
  const { loading, data, error } = useQuery(GET_ALL_LOCATIONS);
  const { locations, setLocations } = useContext(LocationsContext);

  useEffect(() => {
    if (data) {
      setLocations(data.ClientsInfo);
    }

    if (error) {
      console.error(">>> ERROR:", error.message);
    }
  }, [data, loading, error]);

  useEffect(() => {
    if (locations.length) {
      push("/main-view");
    }
  }, [locations]);

  return (
    <div className={classes["home"]}>
      {loading && (
        <div className={classes["loader"]}>
          <span>LOADING LOCATIONS DATA...</span>
          <ThreeDots />
        </div>
      )}
    </div>
  );
}

export default Home;
