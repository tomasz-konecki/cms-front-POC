import React, { createContext, useState, useEffect } from "react";

const LocationsContext = createContext({
  locations: [],
  setLocations: null
});

export function LocationsContextProvider({ children }) {
  const getLocationsFromLocalStorage = () => {
    const localData = sessionStorage.getItem("csm-locations");
    return localData ? JSON.parse(localData) : [];
  };
  const [locations, setLocations] = useState(getLocationsFromLocalStorage());

  useEffect(() => {
    sessionStorage.setItem("csm-locations", JSON.stringify(locations));
    console.log(">>> LocationsContext, locations", locations);
  }, [locations]);

  return (
    <LocationsContext.Provider value={{ locations, setLocations }}>
      {children}
    </LocationsContext.Provider>
  );
}

export default LocationsContext;
