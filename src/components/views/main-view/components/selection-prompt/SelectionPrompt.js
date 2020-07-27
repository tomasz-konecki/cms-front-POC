import React from "react";
import { bool } from "prop-types";

import classes from "./SelectionPrompt.module.scss";

function SelectionPrompt({ open }) {
  return open ? (
    <div className={classes["selection-prompt"]}>Please select location</div>
  ) : null;
}

SelectionPrompt.propTypes = {
  open: bool
};

export default SelectionPrompt;
