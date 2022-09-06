import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export const UserProfile = () => {
  const [userFromDB, setUserFromDB] = useState("");
  const param = useParams();
  const getUserFromDB = async () => {
    const response = await axios.get(`/users/${param}`);
    setUserFromDB(response.data);
  };
  useEffect(() => {
    getUserFromDB();
  }, []);

  console.log(param);
  return <div>UserProfile</div>;
};
