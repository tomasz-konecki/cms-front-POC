import React, { useEffect, useState } from "react";
import { number, arrayOf, object } from "prop-types";

import Legend from "./components/legend/Legend";
import Sensor from "../sensor/Sensor";

import useCurrentTime from "hooks/useCurrentTime";

import classes from "./StatusBoard.module.scss";

function StatusBoard({ desks }) {
  const [total, setTotal] = useState(0);
  const [occupied, setOccupied] = useState(0);
  const [vacant, setVacant] = useState(0);
  const [offPeriod, setOffPeriod] = useState(0);
  const time = useCurrentTime();

  const countStatuses = ({ statusName, cb }) => {
    let count = 0;

    desks.forEach(desk => {
      count = desk.status === statusName ? ++count : count;
    });

    cb(count);
  };

  const setStatuses = () => {
    const statusesArray = [
      { statusName: "BUSY", cb: setOccupied },
      { statusName: "FREE", cb: setVacant },
      { statusName: "OFF_PERIOD", cb: setOffPeriod }
    ];

    statusesArray.forEach(item => countStatuses(item));
  };

  useEffect(() => {
    setTotal(desks.length);
    setStatuses();
  }, [desks]);

  return (
    <div className={classes["status-board"]}>
      <div className={classes["status-board-time"]}>{time.split(",")[1]}</div>
      <Legend />
      <div className={classes["status-board-chart"]}>
        <div className={classes["total"]}>Total: {total}</div>
        <table className={classes["table"]}>
          <tbody>
            <tr>
              <td className={classes["table-cell"]}>
                <Sensor status="BUSY" sensorClass={classes["busy"]} />
                <span>{occupied}</span>
              </td>
              <td className={classes["table-cell"]}>
                <Sensor status="FREE" sensorClass={classes["free"]} />
                <span>{vacant}</span>
              </td>
              <td className={classes["table-cell"]}>
                <Sensor sensorClass={classes["off-period"]} />
                <span>{offPeriod}</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

StatusBoard.propTypes = {
  total: number,
  desks: arrayOf(object),
  occupied: number,
  vacant: number,
  offPeriod: number
};

export default StatusBoard;
