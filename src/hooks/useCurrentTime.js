import { useState, useEffect } from "react";

function useCurrentTime() {
  const [time, setTime] = useState(new Date().toLocaleString());

  let intervalID;

  useEffect(() => {
    intervalID = setInterval(() => tick(), 1000);
    return () => {
      clearInterval(intervalID);
    };
  }, []);

  const tick = () => {
    setTime(new Date().toLocaleString("en-GB", { timeZone: "Europe/Dublin" }));
  };

  return time;
}

export default useCurrentTime;
