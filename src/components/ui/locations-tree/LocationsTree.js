import React, { useEffect, useState, useContext } from "react";
import { TreeView, TreeItem } from "@material-ui/lab";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Scrollbars from "react-custom-scrollbars";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

import LocationsContext from "contexts/locations-context/LocationsContext";

import HideAllButton from "./components/hide-all-button/HideAllButton";

import classes from "./LocationsTree.module.scss";

function LocationsTree() {
  const getExpandedFromLocalStorage = () => {
    const localData = localStorage.getItem("expanded");
    return localData ? localData.split(",") : [];
  };
  const [expanded, setExpanded] = useState(getExpandedFromLocalStorage());
  const getSelectedFromLocalStorage = () => {
    const localData = localStorage.getItem("selected");
    return localData ? localData : "";
  };
  const [selected, setSelected] = useState(getSelectedFromLocalStorage());
  const { push } = useHistory();
  const { locations } = useContext(LocationsContext);

  const handleToggle = (_, nodeIds) => {
    setExpanded(nodeIds);
    localStorage.setItem("expanded", nodeIds);
    // push("/main-view");
  };

  const handleSelect = (_, nodeIds) => {
    setSelected(nodeIds);
    localStorage.setItem("selected", nodeIds);
    // push("/main-view");
  };

  const handleHideAll = () => {
    setExpanded([]);
    localStorage.setItem("expanded", "");
    localStorage.setItem("selected", "");
    push("/main-view");
  };

  useEffect(() => {
    localStorage.setItem("csm-locations", JSON.stringify(locations));
  }, [locations]);

  return (
    <div className={classes["locations"]}>
      <HideAllButton show={expanded.length} onClick={handleHideAll} />
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
                    <Link
                      to={`floor-view?floor=${encodeURIComponent(
                        subLevel_1.path
                      )}`}
                      key={subLevel_1.path}
                    >
                      <TreeItem
                        key={subLevel_1.path}
                        nodeId={subLevel_1.path}
                        label={subLevel_1.name}
                        classes={{
                          root: classes["tree-item-floor"],
                          selected: classes["selected"]
                        }}
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

export default LocationsTree;
