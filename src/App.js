import React from "react";
import Layout from "components/ui/layout/Layout";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import MainView from "components/views/main-view/MainView";

import "styles/global-styles.scss";

const client = new ApolloClient({
  uri: "http://ec2-18-200-143-97.eu-west-1.compute.amazonaws.com:4000/",
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <Router>
          <Switch>
            <Route path="*" component={MainView} />
          </Switch>
        </Router>
      </Layout>
    </ApolloProvider>
  );
}

export default App;
