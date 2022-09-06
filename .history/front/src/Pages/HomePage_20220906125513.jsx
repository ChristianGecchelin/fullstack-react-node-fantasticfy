import React from "react";
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <div className="container-home">
      <h2>Hola !</h2>
      <Link to={`/user-list`}>
        <p>Visita nuestra lista de personajes</p>
      </Link>
    </div>
  );
};
