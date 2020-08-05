import React, { useEffect, useState, useContext } from "react";
import { array, bool } from "prop-types";
import { TreeView, TreeItem } from "@material-ui/lab";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Scrollbars from "react-custom-scrollbars";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import LocationsContext from "contexts/locations-context/LocationsContext";

import classes from "./LocationsTree.module.scss";

function LocationsTree({ loading }) {
  const [expanded, setExpanded] = useState([]);
  const [selected, setSelected] = useState("");
  const [allExpanded, setAllExpanded] = useState([]);
  const { push } = useHistory();
  const { locations, setLocations } = useContext(LocationsContext);

  const handleToggle = (event, nodeIds) => {
    setExpanded(nodeIds);
    localStorage.setItem("expanded", nodeIds);
    push("/main-view");
  };

  const handleSelect = (event, nodeIds) => {
    setSelected(nodeIds);
    localStorage.setItem("selected", nodeIds);
    push("/main-view");
  };

  useEffect(() => {
    push("/main-view");
  }, []);

  return (
    <div className={classes["locations"]}>
      {loading && <h4 style={{ color: "beige" }}>Loading...</h4>}
      {expanded.length > 0 && (
        <div
          className={classes["hide-all-icon-container"]}
          onClick={() => setExpanded([])}
        >
          <ExpandLessIcon className={classes["hide-all-icon"]} />
        </div>
      )}
      <Scrollbars autoHeight autoHeightMax="94vh">
        <TreeView
          classes={{ root: classes["locations-tree"] }}
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ChevronRightIcon />}
          expanded={expanded}
          selected={selected}
          onNodeToggle={handleToggle}
          onNodeSelect={handleSelect}
        >
          {locations.map(mainLocation => (
            <TreeItem
              key={mainLocation.id}
              nodeId={mainLocation.id}
              label={mainLocation.name}
              classes={{ group: classes["group"] }}
            >
              {mainLocation.sites.map(site => (
                <TreeItem key={site.path} nodeId={site.path} label={site.name}>
                  {site.subLocalizations.map(subLevel_1 => (
                    <Link to={subLevel_1.path} key={subLevel_1.path}>
                      <TreeItem
                        key={subLevel_1.path}
                        nodeId={subLevel_1.path}
                        label={subLevel_1.name}
                        classes={{ selected: classes["selected"] }}
                      />
                    </Link>
                  ))}
                </TreeItem>
              ))}
            </TreeItem>
          ))}
        </TreeView>
      </Scrollbars>
    </div>
  );
}

LocationsTree.propTypes = {
  locations: array,
  loading: bool
};

export default LocationsTree;
