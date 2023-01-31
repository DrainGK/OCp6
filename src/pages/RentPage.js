import React, { useEffect, useState } from "react";
import { Navigate, useParams, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import Rent from "../components/Rent";

const RentPage = () => {
  const [house, setHouse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch("/data/houseData.json");
        const data = await res.json();
        const housesFiltered = data.filter((item) => item.id === id);
        console.log(housesFiltered);
        if (housesFiltered.length === 0) {
          return navigate("/Any");
        } else {
          console.log(housesFiltered.length);
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
