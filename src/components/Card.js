import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  const { house } = props;
  return (
    <div className="card">
      <div className="card-container" key={house.id}>
        <Link to={`/rent/` + house.id}>
          <div className="img-container">
            <img src={house.cover} alt={house.title} />
            <h2>{house.title}</h2>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Card;
