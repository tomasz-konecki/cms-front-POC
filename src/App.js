import React from "react";
import Layout from "components/ui/layout/Layout";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import MainView from "components/main-view/MainView";

import "styles/global-styles.scss";

function App() {
  return (
    <Layout>
      <Router>
        <Switch>
          <Route path="*" component={MainView} />
        </Switch>
      </Router>
    </Layout>
  );
}

export default App;
