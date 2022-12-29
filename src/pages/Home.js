import React from "react";
import Card from "../components/Card";
import Footer from "../components/Footer";
import House from "../components/House";
import Navigation from "../components/Navigation";
import Rent from "../components/Rent";

const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <div className="title-background">
        <h1>chez vous, partout ailleurs</h1>
      </div>

      <main className="cards-container">
        <Card />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
