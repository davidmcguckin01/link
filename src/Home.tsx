import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import BusType from "./BusType";
import "./Home.css";

const Home: React.FC<any> = ({ updateTicketProps }) => {
  const nav = useNavigate();

  
  const goldline = () => {
    updateTicketProps([
      "redblue",
      "TEMP",
      "Goldline",
      "#b29130",
      "Belfast",
      "Fivemiletown",
      "Adult Goldline - Single",
    ]);
    nav("/Ticket");
  };
  const metro = () => {
    updateTicketProps([
      "redblue",
      "TEMP",
      "Glider/Metro",
      "#d62e7b",
      "Adult Metro / Glider Single Ticket",
      "City Zone",
      "Adult Metro Single",
    ]);
    nav("/Ticket");
  };
  const nirailways = () => {
    updateTicketProps([
      "redblue",
      "TEMP",
      "NIRailways",
      "#250d67",
      "Derry",
      "Belfast",
      "Adult Rail 1 Day"
    ]);
    nav("/Ticket");
  };

  const goldlineProps = [
    "Goldline",
    "Express Coach Services in Northern Ireland",
  ];
  const metroProps = ["Metro", "Bus Services in Belfast"];
  const niRailwaysProps = ["NI Railways", "Rail Services in Northern Ireland"];

  return (
    <div className="Home">
      <Header headerProps="Select a Bus Ticket" />
      <h2 className="info">Please Select Your Bus Type</h2>
      <BusType onClick={goldline} busTypeProps={goldlineProps} />
      <BusType onClick={metro} busTypeProps={metroProps} />
      <BusType onClick={nirailways} busTypeProps={niRailwaysProps} />
    </div>
  );
};

export default Home;
