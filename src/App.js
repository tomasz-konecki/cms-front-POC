import React from "react";
import Layout from "components/ui/layout/Layout";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import Home from "components/home/Home";
import FloorView from "components/views/floor-view/FloorView";
import MapView from "components/views/map-view/MapView";
import SelectionPrompt from "components/views/main-view/components/selection-prompt/SelectionPrompt";

import { LocationsContextProvider } from "contexts/locations-context/LocationsContext";

import "styles/global-styles.scss";

const client = new ApolloClient({
  uri: "http://ec2-18-200-143-97.eu-west-1.compute.amazonaws.com:4000/",
  cache: new InMemoryCache()
});

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
              <Route path="/main-view" component={SelectionPrompt} />
            </Switch>
          </Layout>
        </Router>
      </LocationsContextProvider>
    </ApolloProvider>
  );
}

export default App;
