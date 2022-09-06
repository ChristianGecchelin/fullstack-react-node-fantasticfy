import { useEffect, useState } from "react";
import axios from "axios";
import { UserCard } from "../Components/UserCard";
import "./index.css";
export const UserList = () => {
  const [list, setList] = useState([]);
  const [genderArray, setGenderArray] = useState([]);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:5005/users");
    setList(response.data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <section className="card-list">
      <div>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <select value={this.state.value} onChange={this.handleChange}>
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option value="coconut">Coconut</option>
          <option value="mango">Mango</option>
        </select>
      </div>
      {list.length > 0 ? (
        list.map((user) => {
          return <UserCard key={user.id} user={user} />;
        })
      ) : (
        <p>Cargando...</p>
      )}
    </section>
  );
};
