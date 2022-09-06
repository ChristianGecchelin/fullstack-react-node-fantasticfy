import React from "react";
import logo from "../../Assets/logo-fantasticfy.webp";
import "./index.css";
export const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <img src={logo} alt="fantasticfy" />
        </li>
        <li>
          <h2>Home</h2>
        </li>
      </ul>
    </nav>
  );
};
