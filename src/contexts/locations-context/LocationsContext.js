import React, { createContext, useState } from "react";

const LocationsContext = createContext({
  locations: [],
  setLocations: null
});

export function LocationsContextProvider({ children }) {
  const [locations, setLocations] = useState([]);

  return (
    <LocationsContext.Provider value={{ locations, setLocations }}>
      {children}
    </LocationsContext.Provider>
  );
}

export default LocationsContext;
