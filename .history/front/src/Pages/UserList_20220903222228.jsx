import { useEffect, useState } from "react";
import axios from "axios";
export const UserList = () => {
  const [list, setList] = useState([]);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:5005/users");
    setList(response.data);
  };

  useEffect(() => {
    getUsers();
  }, []);
  console.log(list);

  return <div>UserList</div>;
};
