import { useEffect, useState } from "react";
import axios from "axios";
export const UserList = () => {
  const [list, setList] = useState([]);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:5005/users");
    return response.data;
  };

  useEffect(() => {
    getUsers();
  }, []);
  console.log(getUsers());

  return <div>UserList</div>;
};
