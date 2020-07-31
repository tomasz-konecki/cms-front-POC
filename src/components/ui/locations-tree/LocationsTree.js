import React, { useEffect, useState } from "react";
import { TreeView, TreeItem } from "@material-ui/lab";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Scrollbars from "react-custom-scrollbars";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useQuery, useLazyQuery } from "@apollo/client";

// import { loacationsData } from "data/locationsData";
import { GET_CLIENTS, GET_LOCATIONS } from "queries/queries";

import ExpandDial from "./components/expand-dial/ExpandDial";

import classes from "./LocationsTree.module.scss";

function LocationsTree(props) {
  const [mainLocations, setMainLocation] = useState([]);
  const [subLocations, setSubLocations] = useState([]);
  const [expanded, setExpanded] = useState([]);
  const [selected, setSelected] = useState("");
  const [allExpanded, setAllExpanded] = useState([]);
  const { push } = useHistory();
  const {
    data: clientsData,
    loading: clientsLoading,
    error: clientsError
  } = useQuery(GET_CLIENTS);
  const [
    getSublocations,
    { loading: getSublocationsLoading, data: sublocationsData }
  ] = useLazyQuery(GET_LOCATIONS);

  const handleToggle = (event, nodeIds) => {
    setExpanded(nodeIds);
    localStorage.setItem("expanded", nodeIds);
    push("/");
  };

  const handleSelect = (event, nodeIds) => {
    setSelected(nodeIds);
    localStorage.setItem("selected", nodeIds);
    push("/");
  };

  useEffect(() => {
    if (clientsData) {
      setMainLocation(clientsData.UsersInfo.clients);
    }
  }, [clientsData]);

  useEffect(() => {
    if (mainLocations.length) {
      // console.log(">>> mainLocations loaded:", mainLocations);
      setSubLocations(new Array(mainLocations.length));

      mainLocations.forEach((mainLocation, index) => {
        const newArray = [...subLocations, { name: mainLocation.name }];

        console.log("### mainLocation name:", mainLocation.name);

        setSubLocations(newArray);
        mainLocation.sites.forEach(site => {
          console.log("Fetch sublocations for:", mainLocation.id, site.path);
          getSublocations({
            variables: {
              path: site.path,
              clientId: mainLocation.id
            }
          });
        });
      });
    }
  }, [mainLocations]);

  useEffect(() => {
    console.log("*** subLocationsData:", sublocationsData);
  }, [sublocationsData]);

  console.log("~~~ subLocations:", subLocations);

  // const createSublocations = id => {
  //   const sites = mainLocations.filter(item => item.id === id)[0].sites;
  //   const sublocationPaths = sites.map(item => item.path);

  //   console.log(">>> clientSublocationPaths:", sublocationPaths);

  //   return (
  //     <>
  //       {sublocationPaths.map(path => (
  //         <div>{path}</div>
  //       ))}
  //     </>
  //   );
  // };

  // console.log("*** subLocationsData:", data);

  return (
    <div className={classes["locations"]}>
      {getSublocationsLoading && (
        <h4 style={{ color: "beige" }}>Sublocations loading...</h4>
      )}
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
          {/* {mainLocations.map(location => (
            <Link to="main-view" key={location.name}>
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
            </Link>
          ))} */}
          {mainLocations.map(mainLocation => (
            <TreeItem
              key={mainLocation.id}
              nodeId={mainLocation.id}
              label={mainLocation.name}
              classes={{ group: classes["group"] }}
            >
              {mainLocation.sites.map(site => (
                <TreeItem
                  key={site.id}
                  nodeId={site.id}
                  label={site.name}
                  classes={{ selected: classes["selected"] }}
                >
                  {/* {createSublocations(mainLocation.id)} */}
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
