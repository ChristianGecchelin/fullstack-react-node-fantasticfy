import { useEffect, useState } from "react";
import axios from "axios";
export const UserList = () => {
  const [list, setList] = useState([]);

  const getUsers = () => {
    axios.get("");
  };

  useEffect(() => {
    getUsers();
  }, []);

  return <div>UserList</div>;
};
