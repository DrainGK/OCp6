import React from "react";
import HouseData from "../houseData.json";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <div className="card">
      {HouseData.map((rent, index) => {
        return (
          <div className="card-container" key={rent.id}>
            <Link to={`/rent/` + rent.id}>
              <div className="img-container">
                <img src={rent.cover} alt={rent.title} />
                <h2>{rent.title}</h2>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
