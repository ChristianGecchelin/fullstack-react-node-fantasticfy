import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export const UserProfile = () => {
  const [userFromDB, setUserFromDB] = useState(false);
  const { id } = useParams();
  const {
    avatar,
    first_name,
    last_name,
    email,
    gender,
    date_of_birth,
    address,
  } = userFromDB;
  const getUserFromDB = async () => {
    const response = await axios.get(`http://localhost:5005/users/${id}`);
    setUserFromDB(response.data);
  };
  useEffect(() => {
    const user = getUserFromDB();
    setUserFromDB(user);
  }, []);
  console.log(address);

  return (
    <div>
      {userFromDB ? (
        <div>
          <img src={avatar} alt="" />
          <div>
            <h2>
              {first_name} {last_name}
            </h2>
            <hr />
            <div>
              <h3>Personal Info</h3>
              <p>{email}</p>
              <p>{gender}</p>
              <p>{date_of_birth}</p>
            </div>
            <div>
              <h3>Info Location</h3>
              {/* 
              <p>{userFromDB.address}</p> */}
              {/*  <p>{userFromDB.address.state}</p>
          <p>{userFromDB.address.country}</p>
          <p>{userFromDB.address.zip_code}</p> */}
            </div>
          </div>
        </div>
      ) : (
        <p>Hola</p>
      )}
    </div>
  );
};
