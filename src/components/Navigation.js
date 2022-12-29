import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="logo">
        <img src="./kasa-logo.svg" alt="kasa-logo" />
      </div>

      <ul>
        <NavLink to="/">
          <li>acceuil</li>
        </NavLink>
        <NavLink to="/about">
          <li>a propos</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
