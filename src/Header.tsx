import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import BackButton from "./back.png";
import TicketButton from "./ticket.png";
import HomeButton from "./home.png";
import OptionsButton from "./options.png";

interface HeaderProps {
  headerProps: string;
}

const Header: React.FC<HeaderProps> = ({headerProps}) => {
  const nav = useNavigate();

  const handleGoBack = () => {
    nav("/");
  };
  const handleGoHome = () => {
    nav("/");
  };
  return (
    <div className="Header">
      <img className="back-button" src={BackButton} onClick={handleGoBack} alt="Back" />
      <div className="header-text">{headerProps}</div>
      <div className="right-side">
        <img src={TicketButton} alt="Ticket" />
        <img src={HomeButton} alt="Home" onClick={handleGoHome} />
        <img src={OptionsButton} alt="Options" />
      </div>
    </div>
  );
}

export default Header;