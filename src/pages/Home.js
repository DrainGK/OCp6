import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

const Home = () => {
  const [houses, setHouses] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./data/houseData.json");
        const data = await response.json();

        setHouses(data);
      } catch (e) {}
    };
    fetchData();
  }, []);
  return (
    <div className="home">
      <Navigation />
      <div className="title-background">
        <h1>Chez vous, partout ailleurs</h1>
      </div>

      <main className="cards-container">
        {houses.map((house) => (
          <Card key={house.id} house={house} />
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default Home;
