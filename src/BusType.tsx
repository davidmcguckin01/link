import React from "react";
import "./BusType.css";
import BusLogo from "./bus.svg";
import RailLogo from "./NI_Railways_icon.svg";

const Home: React.FC<any> = ({ onClick, busTypeProps }) => {
  const busTitle: string = busTypeProps[0];
  const busInfo: string  = busTypeProps[1];

const busStyles = {
  Goldline: {
    logoStyle: { backgroundColor: "#4d6ecf", padding: "2px" },
    titleStyle: { color: "#4d6ecf" },
  },
  Metro: {
    logoStyle: { backgroundColor: "#29d184", padding: "2px" },
    titleStyle: { color: "#29d184" },
  },
  "NI Railways": {
    logoStyle: { backgroundColor: "#daf298", padding: "4px" },
    titleStyle: { color: "#daf298" },
  },
  // Add more bus styles here
};

const getLogoStyle = () => {
  return busStyles[busTitle]?.logoStyle || {};
};

const getTitleStyle = () => {
  return busStyles[busTitle]?.titleStyle || {};
};

const getLogo = () => {
  if(busTitle !== "NI Railways")
    return BusLogo
  return RailLogo
};

  return (
    <div onClick={onClick} className="BusType">
      <img className="logo" style={getLogoStyle()} src={getLogo()} alt="" />
      <div className="text-container">
        <h1 className="title" style={getTitleStyle()}>{busTitle}</h1>
        <p className="bus-info">{busInfo}</p>
      </div>
    </div>
  );
};

export default Home;
