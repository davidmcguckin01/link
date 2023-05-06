import React from "react";
import "./Header.css";
import BackButton from "./back.png";
import TicketButton from "./ticket.png";
import HomeButton from "./home.png";
import OptionsButton from "./options.png";

function Header() {
  return (
    <div className="Header">
        <img className="back-button" src={BackButton} />
        <div className="header-text">Adult Goldline - Single</div>
        <div className="right-side">
          <img src={TicketButton} />
          <img src={HomeButton} />
          <img src={OptionsButton} />
        </div>
    </div>
  );
}

export default Header;
