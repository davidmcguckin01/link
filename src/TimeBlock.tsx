import React from "react";
import './TimeBlock.css'
import Spinner from "./spinner.png";

function TimeBlock({ stringProp, numberProp }) {
  const animation = stringProp === "Seconds" ? true : false;

  return (
    <div className="TimeBlock">
      <p className="text">{stringProp}</p>
      <div className={animation ? "seconds-container" : "number-container"}>
        {animation && <img src={Spinner} alt="spinner"/>}
        <p className="number">{numberProp}</p>
      </div>
    </div>
  );
}

export default TimeBlock;