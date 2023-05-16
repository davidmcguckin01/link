import React from "react";
import "./ExpiryDate.css";

const ExpiryDate: React.FC = () => {
  const currentDate = new Date();
  const options: Intl.DateTimeFormatOptions = {
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
