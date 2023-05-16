import React from "react";
import "./Header.css";
import BackButton from "./back.png";
import TicketButton from "./ticket.png";
import HomeButton from "./home.png";
import OptionsButton from "./options.png";

const Header: React.FC = () => {
  return (
    <div className="Header">
      <img className="back-button" src={BackButton} alt="Back" />
      <div className="header-text">Adult Goldline - Single</div>
      <div className="right-side">
        <img src={TicketButton} alt="Ticket" />
        <img src={HomeButton} alt="Home" />
        <img src={OptionsButton} alt="Options" />
      </div>
    </div>
  );
}

export default Header;