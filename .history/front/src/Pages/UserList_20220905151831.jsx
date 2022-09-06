import { useEffect, useState } from "react";
import axios from "axios";
import { UserCard } from "../Components/UserCard";
import "./index.css";
export const UserList = () => {
  const [list, setList] = useState([]);
  const [genderArray, setGenderArray] = useState([]);
  const [selectValue, setSelectValue] = useState("");

  const getGenderArray = () => {
    if (list) {
      const genders = list.map((user) => {
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
  };

  const filterUsersBySelect = () => {
    console.log(selectValue);
    const filter = list.filter((user) => {
      return user.gender === selectValue;
    });
    console.log(filter);
  };

  const handleChangeSelect = async () => {
    await setSelectValue(selectValue);
    console.log(selectValue);
    await filterUsersBySelect();
  };

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    getGenderArray();
  }, [list]);

  return (
    <section className="card-list">
      <div>
        {/* <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
  />*/}
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