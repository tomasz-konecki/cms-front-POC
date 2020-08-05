import React, { useEffect, useState } from "react";
import { TreeView, TreeItem } from "@material-ui/lab";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Scrollbars from "react-custom-scrollbars";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useQuery, useLazyQuery } from "@apollo/client";

// import { loacationsData } from "data/locationsData";
import { GET_CLIENTS, GET_LOCATIONS } from "queries/queries";

import ExpandDial from "./components/expand-dial/ExpandDial";

import classes from "./LocationsTree.module.scss";

function LocationsTree(props) {
  const [mainLocations, setMainLocations] = useState([]);
  const [expanded, setExpanded] = useState([]);
  const [selected, setSelected] = useState("");
  const [allExpanded, setAllExpanded] = useState([]);
  const { push } = useHistory();
  const {
    data: clientsData,
    loading: clientsLoading,
    error: clientsError
  } = useQuery(GET_CLIENTS);

  const handleToggle = (event, nodeIds) => {
    setExpanded(nodeIds);
    localStorage.setItem("expanded", nodeIds);
    // push("/");
  };

  const handleSelect = (event, nodeIds) => {
    setSelected(nodeIds);
    localStorage.setItem("selected", nodeIds);
    // push("/");
  };

  useEffect(() => {
    if (clientsData) {
      setMainLocations(clientsData.ClientsInfo);
    }
  }, [clientsData]);

  return (
    <div className={classes["locations"]}>
      {clientsLoading && <h4 style={{ color: "beige" }}>Loading...</h4>}
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
          {mainLocations.map(mainLocation => (
            <TreeItem
              key={mainLocation.id}
              nodeId={mainLocation.id}
              label={mainLocation.name}
              // classes={{ group: classes["group"] }}
            >
              {mainLocation.sites.map(site => (
                <TreeItem
                  key={site.path}
                  nodeId={site.path}
                  label={site.name}
                  // classes={{ selected: classes["selected"] }}
                >
                  {site.subLocalizations.map(subLevel_1 => (
                    <TreeItem
                      key={subLevel_1.path}
                      nodeId={subLevel_1.path}
                      label={subLevel_1.name}
                      // classes={{ selected: classes["selected"] }}
                    >
                      {subLevel_1.subLocalizations.map(subLevel_2 => (
                        <TreeItem
                          key={subLevel_2.path}
                          nodeId={subLevel_2.path}
                          label={subLevel_2.name}
                        >
                          {subLevel_2.subLocalizations
                            ? subLevel_2.subLocalizations.map(subLevel_3 => (
                                <TreeItem
                                  key={subLevel_3.path}
                                  nodeId={subLevel_3.path}
                                  label={subLevel_3.name}
                                >
                                  {subLevel_3.subLocalizations
                                    ? subLevel_3.subLocalizations.map(
                                        subLevel_4 => (
                                          <TreeItem
                                            key={subLevel_4.path}
                                            nodeId={subLevel_4.path}
                                            label={subLevel_4.name}
                                          >
                                            {subLevel_4.subLocalizations
                                              ? subLevel_4.subLocalizations.map(
                                                  subLevel_5 => (
                                                    <TreeItem
                                                      key={subLevel_5.path}
                                                      nodeId={subLevel_5.path}
                                                      label={subLevel_5.name}
                                                    >
                                                      {subLevel_5.type ===
                                                      "BENCH"
                                                        ? subLevel_5.subLocalizations.map(
                                                            subLevel_6 => (
                                                              <TreeItem
                                                                key={
                                                                  subLevel_6.path
                                                                }
                                                                nodeId={
                                                                  subLevel_6.path
                                                                }
                                                                label={
                                                                  subLevel_6.name
                                                                }
                                                              />
                                                            )
                                                          )
                                                        : null}
                                                    </TreeItem>
                                                  )
                                                )
                                              : null}
                                          </TreeItem>
                                        )
                                      )
                                    : null}
                                </TreeItem>
                              ))
                            : null}
                        </TreeItem>
                      ))}
                    </TreeItem>
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

LocationsTree.propTypes = {};

export default LocationsTree;
