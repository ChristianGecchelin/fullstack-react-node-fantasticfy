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

  return (
    <section>
      <div>
        <img src="" alt="" />
        <div>
          <p>Name:</p>
          <p>Surname:</p>
          <p>Username:</p>
        </div>
      </div>
    </section>
  );
};
