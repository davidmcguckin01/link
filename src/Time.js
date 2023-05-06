import { useState, useEffect } from "react";
import "./Time.css";
import TimeBlock from "./TimeBlock";

function Time() {
  const [seconds, setSeconds] = useState(59);
  const [countingDown, setCountingDown] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds === 0) {
          return 59;
        }
        return prevSeconds - 1;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="Time">
      <div className="time-container">
        <TimeBlock stringProp="Days" numberProp={undefined} />
        <TimeBlock stringProp="Hours" numberProp={1} />
        <TimeBlock stringProp="Minutes" numberProp={26} />
        <TimeBlock stringProp="Seconds" numberProp={seconds} />
      </div>
    </div>
  );
}

export default Time;