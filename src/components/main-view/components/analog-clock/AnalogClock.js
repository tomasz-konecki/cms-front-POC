import React, { useState, useEffect } from "react";
import Clock from "react-clock";

import classes from "./AnalogClock.module.scss";

function AnalogClock() {
  const [date, setDate] = useState(new Date());

  let clockInterval;

  useEffect(() => {
    clockInterval = setInterval(() => setDate(new Date()), 1000);
    return () => {
      clearInterval(clockInterval);
    };
  }, []);

  return (
    <div className={classes["clock"]}>
      <Clock value={date} size="120" color="red" />
    </div>
  );
}

export default AnalogClock;
