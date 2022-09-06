import React from "react";
import "./index.css";
export const UserCard = ({ user }) => {
  const { avatar, first_name: name, last_name: surname, username } = user;
  return (
    <div className="user-card">
      <img src={avatar} alt="" />
      <div className="info-container">
        <p>Name: {name}</p>
        <p>Surname: {surname}</p>
        <Link href=``>
          <p>Username: {username}</p>
        </Link>
      </div>
    </div>
  );
};