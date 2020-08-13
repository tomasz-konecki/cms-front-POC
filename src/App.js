import React, { useEffect } from "react";
import Layout from "components/ui/layout/Layout";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";

import Home from "components/home/Home";
import FloorView from "components/views/floor-view/FloorView";
import MapView from "components/views/map-view/MapView";
import MainView from "components/views/main-view/MainView";

import { LocationsContextProvider } from "contexts/locations-context/LocationsContext";
import client from "setup/apolloSetup";

import "styles/global-styles.scss";

function App() {
  return (
    <ApolloProvider client={client}>
      <LocationsContextProvider>
        <Router>
          <Layout>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/floor-view" component={FloorView} />
              <Route path="/map-view" component={MapView} />
              <Route path="/main-view" component={MainView} />
            </Switch>
          </Layout>
        </Router>
      </LocationsContextProvider>
    </ApolloProvider>
  );
}

export default App;
