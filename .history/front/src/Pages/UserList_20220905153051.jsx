import { useEffect, useState } from "react";
import axios from "axios";
import { UserCard } from "../Components/UserCard";
import "./index.css";
export const UserList = () => {
  const [list, setList] = useState([]);
  const [inmutableList, setInmutableList] = useState([]);
  const [genderArray, setGenderArray] = useState([]);
  const [selectValue, setSelectValue] = useState("");
  const [input, setInput] = useState("");

  const getGenderArray = () => {
    if (list) {
      const genders = inmutableList.map((user) => {
        return user.gender;
      });
      let result = genders.filter((item, index) => {
        return genders.indexOf(item) === index;
      });
      setGenderArray(result);
    }
  };
  const getUsers = async () => {
    const response = await axios.get("http://localhost:5005/users");
    setList(response.data);
    setInmutableList(response.data);
  };

  const filterUsersBySelect = () => {
    debugger;
    const filter = inmutableList.filter((user) => {
      return user.gender === selectValue;
    });
    setList(filter);
  };

  const handleChangeSelect = (e) => {
    setSelectValue(e.target.value);
  };

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    getGenderArray();
  }, [list]);

  useEffect(() => {
    filterUsersBySelect();
  }, [selectValue]);

  return (
    <section className="card-list">
      <div>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <select value={selectValue} onChange={handleChangeSelect}>
          {genderArray.map((gender) => {
            return (
              <option key={gender} value={gender}>
                {gender}
              </option>
            );
          })}
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
