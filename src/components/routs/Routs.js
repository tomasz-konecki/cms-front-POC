import React from "react";
import { Switch, Route, useLocation, Redirect } from "react-router-dom";
import MainView from "components/main-view/MainView";
import Layout from "components/ui/layout/Layout";

function Routs() {
  return (
    <Layout>
      <Switch>
        <Route path="*" component={MainView} />
      </Switch>
    </Layout>
  );
}

export default Routs;
