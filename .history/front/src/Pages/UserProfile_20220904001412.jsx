import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export const UserProfile = () => {
  const [userFromDB, setUserFromDB] = useState("");
  const { id } = useParams();
  const getUserFromDB = async () => {
    const response = await axios.get(`http://localhost:5005/users/${id}`);
    setUserFromDB(response.data);
  };
  useEffect(() => {
    const user = getUserFromDB();
    setUserFromDB(user);
  }, []);

  console.log(userFromDB);
  return (
    <div>
      <img src={userFromDB.avatar} alt="" />
      <div>
        <h2>
          {userFromDB.first_name} {userFromDB.last_name}
        </h2>
        <hr />
        <div>
          <h3>Personal Info</h3>
          <p>{userFromDB.email}</p>
          <p>{userFromDB.gender}</p>
          <p>{userFromDB.date_of_birth}</p>
        </div>
        <div>
          <h3>Info Location</h3>
          {/* <p>{userFromDB.address.city}</p> */}
          <p>{userFromDB.address.state}</p>
          <p>{userFromDB.address.country}</p>
          <p>{userFromDB.address.zip_code}</p>
        </div>
      </div>
    </div>
  );
};
