import React from "react";
import { array, func } from "prop-types";

import classes from "./MapsPreview.module.scss";

function MapsPreview({ previews, handleMapSelection }) {
  return (
    <div className={classes["map-preview"]}>
      {previews && (
        <div className={classes["map-preview-gallery"]}>
          {previews.map(preview => (
            <div
              key={preview.path}
              className={classes["map-preview-gallery-preview"]}
              onClick={() => handleMapSelection(preview.path)}
            >
              <div className={classes["map-preview-gallery-preview-name"]}>
                {preview.name}
              </div>
              <img
                src={preview.src}
                className={classes["map-preview-gallery-preview-image"]}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

MapsPreview.propTypes = {
  previews: array,
  handleMapSelection: func
};

export default MapsPreview;
