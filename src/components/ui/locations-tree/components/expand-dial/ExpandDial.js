import React from "react";
import SpeedDial from "@material-ui/lab/SpeedDial";
import SpeedDialIcon from "@material-ui/lab/SpeedDialIcon";
import SpeedDialAction from "@material-ui/lab/SpeedDialAction";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import { func } from "prop-types";

import classes from "./ExpandDial.module.scss";

function ExpandDial({ handleExpandAll, handleCollapseAll }) {
  const [open, setOpen] = React.useState(false);

  const actions = [
    { icon: <ExpandMoreIcon />, name: "Expand all", onClick: handleExpandAll },
    {
      icon: <ExpandLessIcon />,
      name: "Collapse all",
      onClick: handleCollapseAll
    }
  ];

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div className={classes["expand-dial"]}>
      <SpeedDial
        ariaLabel="SpeedDial example"
        classes={{
          root: classes["expand-dial-circle"],
          fab: classes["fab"]
        }}
        // hidden={true}
        icon={<SpeedDialIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
        direction="left"
      >
        {actions.map(action => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={action.onClick}
          />
        ))}
      </SpeedDial>
    </div>
  );
}

ExpandDial.propTypes = {
  handleExpandAll: func,
  handleCollapseAll: func
};

export default ExpandDial;
