import React from "react";
import "./ExpiryDate.css";

const ExpiryDate = () => {
  const currentDate = new Date();
  const options = {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  };
  const formattedDate = currentDate.toLocaleDateString("en-UK", options);
  const expires = `Activated on ${formattedDate}`.replace(',', '').replace(',', '');
  return (
    <div className="ExpiryDate">
      <p>{expires}</p>
    </div>
  );
};

export default ExpiryDate;
