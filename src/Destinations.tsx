import React, { useEffect, useState } from "react";
import "./Destinations.css";

interface DestinationProps {
  destinationProps: string[];
}

const Destinations: React.FC<DestinationProps> = ({ destinationProps }) => {
  const [isEditingorigin, setIsEditingorigin] = useState(false);
  const [isEditingdestination, setIsEditingdestination] = useState(false);
  const [originText, setoriginText] = useState(destinationProps[0]);
  const [destinationText, setdestinationText] = useState(destinationProps[1]);
  const [isEditingPassenger, setIsEditingPassenger] = useState(false);
  const [passengerName, setPassengerName] = useState("Matthew Boyd");

  const handlePassengerClick = () => {
    setIsEditingPassenger(true);
  };

  const handlePassengerChange = (e) => {
    setPassengerName(e.target.value);
  };

  const handleSubmitName = (e) => {
    e.preventDefault();
    setIsEditingPassenger(false);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (destinationProps[1] === "City Zone") {
        const adult = document.querySelectorAll(".light");
        adult.forEach((element: any) => {
          element.style.display = "none";
        });
        const extra = document.querySelectorAll(".extra");
        extra.forEach((element: any) => {
          element.style.display = "none";
        });
        const top = document.querySelectorAll(".top");
        top.forEach((element: HTMLElement) => {
          element.style.backgroundColor = "#d62e7b";
          element.style.height = "13vh";
        });
        const cityZone = document.getElementById("destination");
        cityZone.style.backgroundColor = "#07ab08";
      }
    }, 10);

    return () => clearInterval(intervalId);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        <div id="destination" onClick={handledestinationClick}>
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
        <span className="blank extra"></span>
        <div className="small">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Passenger&nbsp;&nbsp;&nbsp;
          {isEditingPassenger ? (
            <form onSubmit={handleSubmitName}>
              <input
                type="text"
                value={passengerName}
                onChange={handlePassengerChange}
                autoFocus
              />
            </form>
          ) : (
            <span onClick={handlePassengerClick}>{passengerName}</span>
          )}
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
