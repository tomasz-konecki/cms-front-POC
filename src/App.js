import React from "react";
import { HashRouter as Router } from "react-router-dom";
import Routs from "components/routs/Routs";

import "styles/global-styles.scss";

function App() {
  return (
    <Router>
      <Routs />
    </Router>
  );
}

export default App;
