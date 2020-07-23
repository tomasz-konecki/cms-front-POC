import React, { useEffect } from "react";
import TreeView from "@material-ui/lab/TreeView";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import TreeItem from "@material-ui/lab/TreeItem";
import Scrollbars from "react-custom-scrollbars";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

import classes from "./LocationsTree.module.scss";

const allExpanded = [
  "intevi-new-york-floor-1",
  "intevi-new-york",
  "intevi-hook-floor-2",
  "intevi-hook-floor-1",
  "intevi-hook",
  "intevi",
  "boi-tower-hill-floor-2",
  "tower-hill-floor-1",
  "boi-one-bank-street-floor-2",
  "boi-one-bank-street-floor-1",
  "boi-tower-hill",
  "boi-one-bank-street",
  "boi"
];

function LocationsTree() {
  const [expanded, setExpanded] = React.useState([]);
  const [selected, setSelected] = React.useState([]);
  const { push } = useHistory();

  const handleToggle = (event, nodeIds) => {
    console.log("expanded:", nodeIds);
    setExpanded(nodeIds);
    push("/");
  };

  const handleSelect = (event, nodeIds) => {
    console.log("selected:", nodeIds);
    setSelected(nodeIds);
    push("/");
  };

  const handleExpandAll = () => {
    setExpanded(allExpanded);
  };

  const handleCollapseAll = () => {
    setExpanded([]);
    push("/");
  };

  useEffect(() => {
    push("/");
  }, []);

  return (
    <div className={classes["localizations"]}>
      <button onClick={handleExpandAll}>Expand all</button>
      <button onClick={handleCollapseAll}>Collapse all</button>
      <Scrollbars
        className={classes["scrollbar"]}
        autoHeight
        autoHeightMax="88vh"
      >
        <TreeView
          classes={{ root: classes["localizations-tree"] }}
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ChevronRightIcon />}
          expanded={expanded}
          selected={selected}
          onNodeToggle={handleToggle}
          onNodeSelect={handleSelect}
        >
          <TreeItem
            nodeId="boi"
            label="Bank Of Ireland"
            classes={{ group: classes["group"] }}
          >
            <TreeItem nodeId="boi-one-bank-street" label="One Bank Street">
              <TreeItem nodeId="boi-one-bank-street-floor-1" label="Floor 1">
                <Link to="boi/one-bank-street/floor-1/room-1">
                  <TreeItem
                    nodeId="boi-one-bank-street-floor-1-room-1"
                    label="Room 1"
                    classes={{ selected: classes["selected"] }}
                  />
                </Link>
                <Link to="boi/one-bank-street/floor-1/room-2">
                  <TreeItem
                    nodeId="boi-one-bank-street-floor-1-room-2"
                    label="Room 2"
                    classes={{ selected: classes["selected"] }}
                  />
                </Link>
              </TreeItem>
              <TreeItem nodeId="boi-one-bank-street-floor-2" label="Floor 2">
                <Link to="boi/one-bank-street/floor-2/room-1">
                  <TreeItem
                    nodeId="boi-one-bank-street-floor-2-room-1"
                    label="Room 1"
                    classes={{ selected: classes["selected"] }}
                  />
                </Link>
                <Link to="boi/one-bank-street/floor-2/room-2">
                  <TreeItem
                    nodeId="boi-one-bank-street-floor-2-room-2"
                    label="Room 2"
                    classes={{ selected: classes["selected"] }}
                  />
                </Link>
                <Link to="boi/one-bank-street/floor-2/room-3">
                  <TreeItem
                    nodeId="boi-one-bank-street-floor-2-room-3"
                    label="Room 3"
                    classes={{ selected: classes["selected"] }}
                  />
                </Link>
              </TreeItem>
            </TreeItem>
            <TreeItem nodeId="boi-tower-hill" label="Tower Hill">
              <TreeItem nodeId="tower-hill-floor-1" label="Floor 1">
                <Link to="boi/tower-hill/floor-1/room-1">
                  <TreeItem
                    nodeId="boi-tower-hill-floor-1-room-1"
                    label="Room 1"
                    classes={{ selected: classes["selected"] }}
                  />
                </Link>
                <Link to="boi/tower-hill/floor-1/room-2">
                  <TreeItem
                    nodeId="boi-tower-hill-floor-1-room-2"
                    label="Room 2"
                    classes={{ selected: classes["selected"] }}
                  />
                </Link>
                <Link to="boi/tower-hill/floor-1/room-3">
                  <TreeItem
                    nodeId="boi-tower-hill-floor-1-room-3"
                    label="Room 3"
                    classes={{ selected: classes["selected"] }}
                  />
                </Link>
              </TreeItem>
              <TreeItem nodeId="boi-tower-hill-floor-2" label="Floor 2">
                <Link to="boi/tower-hill/floor-2/room-1">
                  <TreeItem
                    nodeId="boi-tower-hill-floor-2-room-1"
                    label="Room 1"
                    classes={{ selected: classes["selected"] }}
                  />
                </Link>
                <Link to="boi/tower-hill/floor-2/room-2">
                  <TreeItem
                    nodeId="boi-tower-hill-floor-2-room-2"
                    label="Room 2"
                    classes={{ selected: classes["selected"] }}
                  />
                </Link>
                <Link to="boi/tower-hill/floor-2/room-3">
                  <TreeItem
                    nodeId="boi-tower-hill-floor-2-room-3"
                    label="Room 3"
                    classes={{ selected: classes["selected"] }}
                  />
                </Link>
                <Link to="boi/tower-hill/floor-2/room-4">
                  <TreeItem
                    nodeId="boi-tower-hill-floor-2-room-4"
                    label="Room 4"
                    classes={{ selected: classes["selected"] }}
                  />
                </Link>
              </TreeItem>
            </TreeItem>
          </TreeItem>
          <TreeItem
            nodeId="intevi"
            label="Intevi"
            classes={{ group: classes["group"] }}
          >
            <TreeItem nodeId="intevi-hook" label="Hook">
              <TreeItem nodeId="intevi-hook-floor-1" label="Floor 1">
                <Link to="intevi/hook/floor-1/room-1">
                  <TreeItem
                    nodeId="intevi-hook-floor-1-room-1"
                    label="Room 1"
                    classes={{ selected: classes["selected"] }}
                  />
                </Link>
                <Link to="intevi/hook/floor-1/room-2">
                  <TreeItem
                    nodeId="intevi-hook-floor-1-room-2"
                    label="Room 2"
                    classes={{ selected: classes["selected"] }}
                  />
                </Link>
              </TreeItem>
              <TreeItem nodeId="intevi-hook-floor-2" label="Floor 2">
                <Link to="intevi/hook/floor-2/room-1">
                  <TreeItem
                    nodeId="intevi-hook-floor-2-room-1"
                    label="Room 1"
                    classes={{ selected: classes["selected"] }}
                  />
                </Link>
                <Link to="intevi/hook/floor-2/room-1">
                  <TreeItem
                    nodeId="intevi-hook-floor-2-room-2"
                    label="Room 2"
                    classes={{ selected: classes["selected"] }}
                  />
                </Link>
              </TreeItem>
            </TreeItem>
            <TreeItem nodeId="intevi-new-york" label="New York">
              <TreeItem nodeId="intevi-new-york-floor-1" label="Floor 1">
                <Link to="intevi/new-york/floor-1/room-1">
                  <TreeItem
                    nodeId="intevi-new-york-floor-1-room-1"
                    label="Room 1"
                    classes={{ selected: classes["selected"] }}
                  />
                </Link>
                <Link to="intevi/new-york/floor-1/room-2">
                  <TreeItem
                    nodeId="intevi-new-york-floor-1-room-2"
                    label="Room 2"
                    classes={{ selected: classes["selected"] }}
                  />
                </Link>
                <Link to="intevi/new-york/floor-1/room-3">
                  <TreeItem
                    nodeId="intevi-new-york-floor-1-room-3"
                    label="Room 3"
                    classes={{ selected: classes["selected"] }}
                  />
                </Link>
              </TreeItem>
            </TreeItem>
          </TreeItem>
        </TreeView>
      </Scrollbars>
    </div>
  );
}

export default LocationsTree;
