import React from "react";
import { ButtonGroup, Button } from "@material-ui/core";
import ZoomInIcon from "@material-ui/icons/ZoomIn";
import ZoomOutIcon from "@material-ui/icons/ZoomOut";
import ZoomOutMapIcon from "@material-ui/icons/ZoomOutMap";
import { func } from "prop-types";

import classes from "./NavTools.module.scss";

function NavTools({ zoomIn, zoomOut, resetTransform }) {
  return (
    <div className={classes["nav-tools"]}>
      <ButtonGroup
        color="primary"
        aria-label="vertical outlined primary button group"
        variant="contained"
        size="small"
        classes={{
          root: classes["btn-group"]
        }}
      >
        <Button onClick={zoomIn} classes={{ root: classes["btn-color"] }}>
          <ZoomInIcon />
        </Button>
        <Button onClick={zoomOut} classes={{ root: classes["btn-color"] }}>
          <ZoomOutIcon />
        </Button>
        <Button
          onClick={resetTransform}
          classes={{ root: classes["btn-color"] }}
        >
          <ZoomOutMapIcon />
        </Button>
      </ButtonGroup>
    </div>
  );
}

NavTools.propTypes = {
  zoomIn: func,
  zoomOut: func,
  resetTransform: func
};

export default NavTools;
