import React, { useState } from "react";
import "./Destinations.css";

interface DestinationProps {
  destinationProps: string[];
}

const Destinations: React.FC<DestinationProps> = ({destinationProps}) => {
  const [isEditingorigin, setIsEditingorigin] = useState(false);
  const [isEditingdestination, setIsEditingdestination] = useState(false);
  const [isEditingName, setIsEditingName] = useState(false);
  const [originText, setoriginText] = useState(destinationProps[0]);
  const [destinationText, setdestinationText] = useState(destinationProps[1]);
  const [passengerName, setPassengerName] = useState("Matthew Boyd");

  const handleoriginClick = () => {
    setIsEditingorigin(true);
  };

  const handledestinationClick = () => {
    setIsEditingdestination(true);
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
        <div className="top" onClick={handleoriginClick}>
          {isEditingorigin ? (
            <form onSubmit={(e) => handleSubmit(e, setIsEditingorigin)}>
              <input
                type="text"
                value={originText}
                onChange={(e) => handleInputChange(e, setoriginText)}
                autoFocus
              />
            </form>
          ) : (
            originText
          )}
        </div>
        <span className="blank"></span>
        <div className="" onClick={handledestinationClick}>
          {isEditingdestination ? (
            <form onSubmit={(e) => handleSubmit(e, setIsEditingdestination)}>
              <input
                type="text"
                value={destinationText}
                onChange={(e) => handleInputChange(e, setdestinationText)}
                autoFocus
              />
            </form>
          ) : (
            destinationText
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
