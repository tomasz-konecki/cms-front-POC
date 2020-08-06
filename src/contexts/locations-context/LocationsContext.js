import React, { createContext, useState, useEffect } from "react";

const LocationsContext = createContext({
  locations: [],
  setLocations: null
});

export function LocationsContextProvider({ children }) {
  const getLocationsFromLocalStorage = () => {
    const localData = localStorage.getItem("csm-locations");
    return localData ? JSON.parse(localData) : [];
  };
  const [locations, setLocations] = useState(getLocationsFromLocalStorage());

  useEffect(() => {
    localStorage.setItem("csm-locations", JSON.stringify(locations));
  }, [locations]);

  return (
    <LocationsContext.Provider value={{ locations, setLocations }}>
      {children}
    </LocationsContext.Provider>
  );
}

export default LocationsContext;
