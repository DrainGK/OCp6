import React from "react";
import { NavLink } from "react-router-dom";
import Navigation from "../components/Navigation";

const NotFound = () => {
  return (
    <div className="error">
      <Navigation />
      <div className="error-container">
        <h1>404</h1>
        <NavLink to="/">
          <p>retour sur la page d'acceuil</p>
        </NavLink>
      </div>
    </div>
  );
};

export default NotFound;
