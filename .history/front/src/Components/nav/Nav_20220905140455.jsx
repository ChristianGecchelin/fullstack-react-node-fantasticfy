import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/logo-fantasticfy.webp";
import "./index.css";
export const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/about">About</Link>
          <a href="/">
            <img src={logo} alt="fantasticfy" />
          </a>
        </li>
        <li>
          <a href="/">
            <h2>Home</h2>
          </a>
        </li>
        <li>
          <a href="/user-list">
            <h2>List</h2>
          </a>
        </li>
      </ul>
    </nav>
  );
};
