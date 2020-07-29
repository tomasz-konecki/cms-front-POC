import React, { useState, useEffect } from "react";
import { number } from "prop-types";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel
} from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import Scrollbars from "react-custom-scrollbars";
import HeatMap from "react-heatmap-grid";
import ReactApexChart from "apexcharts";
import Chart from "react-apexcharts";

import classes from "./HeatMapGrid.module.scss";

function HeatMapGrid({ occupied, vacant }) {
  const total = occupied + vacant;
  const [days, setDays] = useState("7");
  const [xLabels, setXLabels] = useState([]);
  const [yLabels, setYLabels] = useState(
    new Array(total).fill(0).map((_, i) => `${i + 1}`)
  );
  const [loading, setLoading] = useState(false);

  const heatMapData = new Array(yLabels.length)
    .fill(0)
    .map(() =>
      new Array(xLabels.length)
        .fill(0)
        .map(() => Math.floor(Math.random() * 100))
    );

  const handleChange = e => {
    setDays(e.target.value);
    setLoading(true);
  };

  const setUpXLabels = () => {
    let array = [];
    const numberOfDays = Number(days);
    for (let i = 1; i < numberOfDays + 1; i++) {
      array = [...array, i];
    }
    setXLabels(array);
  };

  useEffect(() => {
    setTimeout(() => {
      setUpXLabels();
      setLoading(false);
    }, 500);
  }, [days]);

  useEffect(() => {
    setUpXLabels();
  }, []);

  return (
    <div className={classes["heat-map"]}>
      <div className={classes["heat-map-top-bar"]}>
        <div className={classes["heat-map-top-bar-label"]}>
          Occupancy status from the last days:
        </div>
        <FormControl
          component="fieldset"
          classes={{ root: classes["radio-buttons"] }}
        >
          <RadioGroup
            row
            aria-label="days"
            name="days"
            defaultValue={days}
            onChange={handleChange}
          >
            <FormControlLabel
              value="7"
              control={<Radio color="primary" />}
              label="7"
            />
            <FormControlLabel
              value="14"
              control={<Radio color="primary" />}
              label="14"
            />
            <FormControlLabel
              value="30"
              control={<Radio color="primary" />}
              label="30"
            />
          </RadioGroup>
        </FormControl>
      </div>
      <div className={classes["heat-map-grid"]}>
        {!loading ? (
          <Scrollbars
            autoHeight
            autoHeightMax="20rem"
            className={classes["heat-map-grid-scrollbars"]}
          >
            <HeatMap
              xLabels={xLabels}
              yLabels={yLabels}
              data={heatMapData}
              background="darkorange"
              xLabelsLocation="top"
              cellStyle={(background, value, min, max, data, x, y) => ({
                background: `rgba(66, 86, 244, ${
                  1 - (max - value) / (max - min)
                })`,
                fontSize: "11px"
              })}
              unit="%"
              // cellRender={value => value && `${value}%`}
              // height="120"
            />
          </Scrollbars>
        ) : (
          <div className={classes["heat-map-grid-loader"]}>
            <span>LOADING...</span>
          </div>
        )}
      </div>
    </div>
  );
}

HeatMapGrid.propTypes = {
  occupied: number,
  vacant: number
};

export default HeatMapGrid;
