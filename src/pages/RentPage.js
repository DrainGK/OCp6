import React from "react";
import Navigation from "../components/Navigation";
import Rent from "../components/Rent";

const RentPage = () => {
  return (
    <div>
      <Navigation />
      <Rent rentNumber={1} />
    </div>
  );
};

export default RentPage;
