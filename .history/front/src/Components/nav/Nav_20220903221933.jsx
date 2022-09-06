import React from "react";
import logo from "../../Assets/logo-fantasticfy.webp";
import "./index.css";
export const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="/">
            <img src={logo} alt="fantasticfy" />
          </a>
        </li>
        <li>
          <a href="/">
            <h2>Home</h2>
          </a>
        </li>
      </ul>
    </nav>
  );
};
