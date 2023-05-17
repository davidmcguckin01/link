import React from "react";
import "./BusType.css";
import BusLogo from "./bus.svg";

const Home: React.FC<any> = ({ onClick, busTypeProps }) => {
  const busTitle = busTypeProps[0];
  const busInfo = busTypeProps[1];

  const getLogoStyle = () => {
    if (busTitle === "Goldline") {
      return { backgroundColor: "#4d6ecf" };
    } else if (busTitle === "Metro") {
      return { backgroundColor: "#29d184" };
    } else {
      return {};
    }
  };

  return (
    <div onClick={onClick} className="BusType">
      <img className="logo" style={getLogoStyle()} src={BusLogo} alt="" />
      <div className="text-container">
        <h1 className="title">{busTitle}</h1>
        <p className="bus-info">{busInfo}</p>
      </div>
    </div>
  );
};

export default Home;
