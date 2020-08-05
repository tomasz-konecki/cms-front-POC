import React, { useEffect, useState, useContext } from "react";
import Layout from "components/ui/layout/Layout";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql
} from "@apollo/client";

import LocationsContext from "contexts/locations-context/LocationsContext";

import Home from "components/home/Home";
import MainView from "components/views/main-view/MainView";
import FloorView from "components/views/floor-view/FloorView";
import MapView from "components/views/map-view/MapView";

import { LocationsContextProvider } from "contexts/locations-context/LocationsContext";

import { GET_ALL_LOCATIONS } from "queries/queries";

import "styles/global-styles.scss";
import SelectionPrompt from "components/views/main-view/components/selection-prompt/SelectionPrompt";

const client = new ApolloClient({
  uri: "http://ec2-18-200-143-97.eu-west-1.compute.amazonaws.com:4000/",
  cache: new InMemoryCache()
});

function App() {
  const [allLocations, setAllLocations] = useState([]);
  useEffect(() => {
    client
      .query({
        query: GET_ALL_LOCATIONS
      })
      .then(({ data }) => {
        console.log("App, data", data);
        setAllLocations(data.ClientsInfo);
      })
      .catch(err => console.log(err.message));
  });

  return (
    <ApolloProvider client={client}>
      <LocationsContextProvider>
        <Router>
          <Layout allLocations={allLocations}>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/floor-view" component={FloorView} />
              <Route path="/map-view" component={MapView} />
              <Route path="/main-view" component={SelectionPrompt} />
            </Switch>
          </Layout>
        </Router>
      </LocationsContextProvider>
    </ApolloProvider>
  );
}

export default App;
