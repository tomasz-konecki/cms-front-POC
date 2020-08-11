import React, { useEffect } from "react";
import { ButtonGroup, Button } from "@material-ui/core";
import ZoomInIcon from "@material-ui/icons/ZoomIn";
import ZoomOutIcon from "@material-ui/icons/ZoomOut";
import ZoomOutMapIcon from "@material-ui/icons/ZoomOutMap";
import { func } from "prop-types";

import classes from "./NavTools.module.scss";

function NavTools({
  zoomIn,
  zoomOut,
  resetTransform,
  positionX,
  positionY,
  setPositionY,
  scale
}) {
  // useEffect(() => {
  //   if (scale < 1 && positionY > 700) {
  //     setPositionY(10);
  //   }
  // }, [scale]);

  return (
    <div className={classes["nav-tools"]}>
      {/* <div className={classes["close"]} onClick={() => history.goBack()}> */}
      {/* <ArrowBackIosIcon /> */}
      {/* <span>X:{positionX}&nbsp;</span>
        <span>Y:{positionY}&nbsp;</span>
        <span>scale:{scale}</span> */}
      {/* </div> */}
      <ButtonGroup
        color="primary"
        aria-label="vertical outlined primary button group"
        variant="contained"
        classes={{ root: classes["btn-group"] }}
      >
        <Button onClick={zoomIn}>
          <ZoomInIcon />
        </Button>
        <Button onClick={zoomOut}>
          <ZoomOutIcon />
        </Button>
        <Button onClick={resetTransform}>
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
