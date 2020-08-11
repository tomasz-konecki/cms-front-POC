import React from "react";
import { useHistory } from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

import classes from "./BackArrow.module.scss";

function BackArrow() {
  const history = useHistory();

  return (
    <div className={classes["back-arrow"]} onClick={() => history.goBack()}>
      <ArrowBackIosIcon />
    </div>
  );
}

export default BackArrow;
