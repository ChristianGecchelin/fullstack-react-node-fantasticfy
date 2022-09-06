import { useEffect, useState } from "react";
import axios from "axios";
import { UserCard } from "../Components/UserCard";
export const UserList = () => {
  const [list, setList] = useState([]);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:5005/users");
    setList(response.data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <section>
      {list.length > 0 ? (
        list.map((user) => {
          console.log(user);
          return <UserCard />;
        })
      ) : (
        <p>Cargando...</p>
      )}
    </section>
  );
};
