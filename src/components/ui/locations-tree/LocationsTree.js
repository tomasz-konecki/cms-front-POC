import React, { useEffect, useState } from "react";
import { TreeView, TreeItem } from "@material-ui/lab";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Scrollbars from "react-custom-scrollbars";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

import { loacationsData } from "data/locationsData";

import ExpandDial from "./components/expand-dial/ExpandDial";

import classes from "./LocationsTree.module.scss";

function LocationsTreeDynamic(props) {
  const [locations, setLocations] = useState([]);
  const [expanded, setExpanded] = useState([]);
  const [selected, setSelected] = useState([]);
  const [allExpanded, setAllExpanded] = useState([]);
  const { push } = useHistory();

  const handleToggle = (event, nodeIds) => {
    setExpanded(nodeIds);
    push("/");
  };

  const handleSelect = (event, nodeIds) => {
    setSelected(nodeIds);
    push("/");
  };

  const handleExpandAll = () => {
    setExpanded(allExpanded);
  };

  const handleCollapseAll = () => {
    setExpanded([]);
    setSelected([]);
    push("/");
  };

  useEffect(() => {
    setLocations(loacationsData);
  }, []);

  useEffect(() => {
    const allExpandedArray = locations.map(location => location.id);
    setAllExpanded(allExpandedArray);
  }, [locations]);

  return (
    <div className={classes["locations"]}>
      <ExpandDial
        handleExpandAll={handleExpandAll}
        handleCollapseAll={handleCollapseAll}
      />
      <Scrollbars autoHeight autoHeightMax="88vh">
        <TreeView
          classes={{ root: classes["locations-tree"] }}
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ChevronRightIcon />}
          expanded={expanded}
          selected={selected}
          onNodeToggle={handleToggle}
          onNodeSelect={handleSelect}
        >
          {locations.map(location => (
            <TreeItem
              key={location.id}
              nodeId={location.id}
              label={location.name}
              classes={{ group: classes["group"] }}
            >
              {location.floors.map(floor => (
                <Link to={floor.path} key={floor.id}>
                  <TreeItem
                    nodeId={floor.id}
                    label={floor.name}
                    classes={{ selected: classes["selected"] }}
                  />
                </Link>
              ))}
            </TreeItem>
          ))}
        </TreeView>
      </Scrollbars>
    </div>
  );
}

LocationsTreeDynamic.propTypes = {};

export default LocationsTreeDynamic;
