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
          Fullname: {userFromDB.first_name} {userFromDB.last_name}
        </h2>
      </div>
    </div>
  );
};