import React from "react";
import { NavLink } from "react-router-dom";
import Navigation from "../components/Navigation";

const NotFound = () => {
  return (
    <div className="error">
      <Navigation />
      <div className="error-container">
        <h1>404</h1>
        <h2>Oops! La page que vous avez demandez n'existe pas</h2>
        <NavLink to="/">
          <p>retour sur la page d'acceuil</p>
        </NavLink>
      </div>
    </div>
  );
};

export default NotFound;
