import React from "react";

export const UserCard = ({ user }) => {
  const { avatar, first_name: name, last_name: surname, username } = user;
  return (
    <div>
      <img src={avatar} alt="" />
      <div className="info-container">
        <p>Name: {name}</p>
        <p>Surname: {surname}</p>
        <p>Username: {username}</p>
      </div>
    </div>
  );
};
