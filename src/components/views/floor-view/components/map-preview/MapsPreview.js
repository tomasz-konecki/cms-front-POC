import React from "react";
import { array } from "prop-types";
import { Link } from "react-router-dom";

import classes from "./MapsPreview.module.scss";

function MapsPreview({ previews }) {
  console.log("previews:", previews);

  return (
    <div className={classes["map-preview"]}>
      {previews && (
        <div className={classes["map-preview-gallery"]}>
          {previews.map(preview => (
            <Link to={`map-view?map=${encodeURIComponent(preview.path)}`}>
              <div
                key={preview.path}
                className={classes["map-preview-gallery-preview"]}
              >
                <div className={classes["map-preview-gallery-preview-name"]}>
                  {preview.name}
                </div>
                <img
                  src={preview.src}
                  className={classes["map-preview-gallery-preview-image"]}
                />
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

MapsPreview.propTypes = {
  previews: array
};

export default MapsPreview;
