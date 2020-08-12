import React from "react";
import { func, number } from "prop-types";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

import classes from "./HideAllButton.module.scss";

function HideAllButton({ show, onClick }) {
  return show ? (
    <div className={classes["hide-all-icon-container"]} onClick={onClick}>
      <ExpandLessIcon className={classes["hide-all-icon"]} />
    </div>
  ) : null;
}

HideAllButton.propTypes = {
  onClick: func,
  show: number
};

export default HideAllButton;
