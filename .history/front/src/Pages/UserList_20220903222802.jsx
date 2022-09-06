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
        })(
          <div>
            <img src="" alt="" />
            <div>
              <p>Name:</p>
              <p>Surname:</p>
              <p>Username:</p>
            </div>
          </div>
        )
      ) : (
        <p>Cargando...</p>
      )}
    </section>
  );
};
