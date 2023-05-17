import React, { useState } from "react";
import {
  HashRouter as Router,
  Route,
  Routes as Switch,
} from "react-router-dom";

import Home from "./Home";
import Ticket from "./Ticket";

function App() {
  const [ticketProps, setTicketProps] = useState([
    "redblue",
    "FATE",
    "Goldline",
    "#b29130",
    "Belfast",
    "Fivemiletown",
  ]);

  const updateTicketProps = (newTicketProps) => {
    setTicketProps(newTicketProps);
  };

  return (
    <Router>
      <Switch>
        <Route path="/" Component={() => <Home updateTicketProps={updateTicketProps}/>} />
        <Route
          path="/Ticket"
          Component={() => <Ticket ticketProps={ticketProps} />}
        />
      </Switch>
    </Router>
  );
}

export default App;
