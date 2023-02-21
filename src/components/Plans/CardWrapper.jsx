import React from "react";
import "./CardWrapper.scss";
import Card from "./Cards/Card";
const CardWrapper = () => {
  return (
    <div className="cards__wrapper" id="card-wrapper">
      <Card />
    </div>
  );
};

export default CardWrapper;
