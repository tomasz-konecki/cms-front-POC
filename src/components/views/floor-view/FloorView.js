// @ts-nocheck
import React, { useEffect, useState } from "react";
import { func } from "prop-types";

import previews from "data/previews";
import useQuery from "hooks/useQuery";

import MapsPreview from "./components/map-preview/MapsPreview";

import classes from "./FloorView.module.scss";

function FloorView({ handleMapSelection }) {
  const [previewsArray, setPreviewsArray] = useState([]);
  const query = useQuery();

  useEffect(() => {
    const previewKey = `${query.get("floor")}`;
    setPreviewsArray(previews[previewKey]);
  }, [query]);

  return (
    <div className={classes["floor-view"]}>
      <div className={classes["floor-status"]}>
        <MapsPreview
          previews={previewsArray}
          handleMapSelection={handleMapSelection}
        />
      </div>
    </div>
  );
}

FloorView.propTypes = {
  handleMapSelection: func
};

export default FloorView;
