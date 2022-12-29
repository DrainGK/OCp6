import { React, useState } from "react";
import HouseData from "../houseData.json";

const Rent = ({ rentNumber }) => {
  const [currentRent] = useState(HouseData[rentNumber]);
  return (
    <div className="rent">
      <div className="slider">
        <img src={currentRent.cover} alt={currentRent.title} />
      </div>
      <div className="rent-container">
        <div className="owner-info">
          <p>{currentRent.title}</p>
          <p>{currentRent.location}</p>
          <p>{currentRent.tags}</p>
        </div>
        <div className="owner">
          <p>{currentRent.host.name}</p>
          <span>{currentRent.rating}</span>
        </div>
      </div>
      <div className="rent-info">
        <div className="description">{currentRent.description}</div>
        <div className="equip">{currentRent.equipments}</div>
      </div>
    </div>
  );
};

export default Rent;
