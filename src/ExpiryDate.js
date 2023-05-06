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
  const formattedDate = currentDate.toLocaleDateString("en-US", options);
  const expires = `Expires ${formattedDate}`.replace(',', '').replace(',', '');
  return (
    <div className="ExpiryDate">
      <p>{expires}</p>
    </div>
  );
};

export default ExpiryDate;
