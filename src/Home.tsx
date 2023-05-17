import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import BusType from "./BusType";
import './Home.css'

const Home: React.FC<any> = ({updateTicketProps}) => {
  const nav = useNavigate();

  const goldline = () => {
    updateTicketProps(["redblue",
    "TEMP",
    "Goldline",
    "#b29130",
    "Belfast",
    "Fivemiletown"]);
    nav("/Ticket");
}
  const metro = () => {
    updateTicketProps(["redblue",
    "TEMP",
    "Glider/Metro",
    "#d62e7b",
    "Adult Metro / Glider Single Ticket",
    "City Zone"]);
    nav("/Ticket");
}

const goldlineProps = ["Goldline", "Express Coach Services in Northern Ireland"];
const metroProps = ["Metro", "Bus Services in Belfast"];

  return (
    <div className="Home">
      <Header headerProps="Select a Bus Ticket"/>
      <h2 className="info">Please Select Your Bus Type</h2>
      <BusType onClick={goldline} busTypeProps={goldlineProps} />
      <BusType onClick={metro} busTypeProps={metroProps} />
    </div>
  );
}

export default Home;