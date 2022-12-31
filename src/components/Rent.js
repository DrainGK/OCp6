import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HouseData from "../houseData.json";
import Footer from "./Footer";
import Navigation from "./Navigation";

const Rent = ({}) => {
  const [currentRent, setCurrentRent] = useState(HouseData);
  const params = useParams();
  const id = params.id;

  const fetchDetails = () => {
    fetch(`HouseData.json`)
      .then((res) => res.json())
      .then((data) => setCurrentRent(data));
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  return (index) => (
    <div className="rent">
      <Navigation />
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
          <p>{currentRent[index].host.name}</p>
          <span>{currentRent.rating}</span>
        </div>
      </div>
      <div className="rent-info">
        <div className="description">{currentRent.description}</div>
        <div className="equip">{currentRent.equipments}</div>
      </div>
      <Footer />
    </div>
  );
};

export default Rent;
