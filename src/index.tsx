import React from 'react';
import { HashRouter as Router, Route, Routes as Switch } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import Ticket from './Ticket';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const ticketProps = ["redblue", "FATE", "Goldline", "#b29130", "Belfast", "Fivemiletown"]
root.render(
  <React.StrictMode>
    <Ticket ticketProps={ticketProps}/>
  </React.StrictMode>
);

reportWebVitals();
