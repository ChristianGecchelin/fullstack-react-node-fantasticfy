import React from "react";

export const UserCard = ({ user }) => {
  const { avatar, first_name: name, last_name: surname } = user;
  return (
    <div>
      <img src={avatar} alt="" />
      <div>
        <p>Name: ${name}</p>
        <p>Surname: ${surname}</p>
        <p>Username:</p>
      </div>
    </div>
  );
};