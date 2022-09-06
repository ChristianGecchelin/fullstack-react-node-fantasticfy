import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "./index.css";
export const UserCard = ({ user }) => {
  const { id, avatar, first_name: name, last_name: surname, username } = user;
  const [userFromDB, setUserFromDB] = useState("");
  const param = useParams();
  console.log(param);
  /*  const getUserFromDB = async () => {
    const response = await axios.get(`/users/${param}`);
    setUserFromDB(response.data);
  };
  useEffect(() => {
    getUserFromDB();
  }, []);
 */
  return (
    <div className="user-card">
      <img src={avatar} alt="" />
      <div className="info-container">
        <p>Name: {name}</p>
        <p>Surname: {surname}</p>
        <Link to={`/user-profile/${id}`}>
          <p>Username: {username}</p>
        </Link>
      </div>
    </div>
  );
};
