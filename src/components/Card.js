import React from "react";
import HouseData from "../houseData.json";
import { NavLink } from "react-router-dom";

const Card = () => {
  return (
    <div className="card">
      {HouseData.slice(0, 12).map((rent, index) => {
        return (
          <NavLink to="/rent">
            <div className="img-container" key={rent.id}>
              <img src={rent.cover} alt={rent.title} />
              <h2>{rent.title}</h2>
            </div>
          </NavLink>
        );
      })}
    </div>
  );
};

export default Card;
