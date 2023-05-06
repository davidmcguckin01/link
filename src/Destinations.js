import React, { useState } from "react";
import "./Destinations.css";

const Destinations = () => {
  const [isEditingFivemiletown, setIsEditingFivemiletown] = useState(false);
  const [isEditingBelfast, setIsEditingBelfast] = useState(false);
  const [fivemiletownText, setFivemiletownText] = useState("Fivemiletown");
  const [belfastText, setBelfastText] = useState("Belfast");

  const handleFivemiletownClick = () => {
    setIsEditingFivemiletown(true);
  };

  const handleBelfastClick = () => {
    setIsEditingBelfast(true);
  };

  const handleInputChange = (e, setText) => {
    setText(e.target.value);
  };

  const handleSubmit = (e, setIsEditing) => {
    e.preventDefault();
    setIsEditing(false);
  };

  return (
    <span className="fix-destinations">
      <div className="Destinations">
        <div className="top" onClick={handleFivemiletownClick}>
          {isEditingFivemiletown ? (
            <form onSubmit={(e) => handleSubmit(e, setIsEditingFivemiletown)}>
              <input
                type="text"
                value={fivemiletownText}
                onChange={(e) => handleInputChange(e, setFivemiletownText)}
                autoFocus
              />
            </form>
          ) : (
            fivemiletownText
          )}
        </div>
        <span className="blank"></span>
        <div className="" onClick={handleBelfastClick}>
          {isEditingBelfast ? (
            <form onSubmit={(e) => handleSubmit(e, setIsEditingBelfast)}>
              <input
                type="text"
                value={belfastText}
                onChange={(e) => handleInputChange(e, setBelfastText)}
                autoFocus
              />
            </form>
          ) : (
            belfastText
          )}
        </div>
        <span className="blank"></span>
        <div className="light">Adult</div>
        <span className="blank"></span>
        <div className="small">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Passenger
          &nbsp;&nbsp;&nbsp;Matthew Boyd<p></p>
        </div>
        <span className="blank"></span>
        <div className="small bottom fix">
          Ticket Number &nbsp;&nbsp;yNatSLMJGzS<p></p>
        </div>
      </div>
    </span>
  );
};

export default Destinations;
