import React, { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import Rent from "../components/Rent";

const RentPage = () => {
  const [house, setHouse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch("/data/houseData.json");
        const data = await res.json();
        const housesFiltered = data.filter((item) => item.id === id);
        if (housesFiltered.length === 0) {
          return Navigate("/rent/*");
        } else {
          setHouse(housesFiltered[0]);
        }
        setIsLoading(false);
      } catch (e) {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <Navigation />
      {house && <Rent house={house} />}
      <Footer />
    </div>
  );
};

export default RentPage;
