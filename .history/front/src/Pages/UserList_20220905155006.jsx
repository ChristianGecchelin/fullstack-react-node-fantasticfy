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
    const filter = inmutableList.filter((user) => {
      return user.gender === selectValue;
    });
    setList(filter);
  };

  const filterByName = () => {
    debugger;
    const filter = inmutableList.filter((user) => {
      debugger;
      if (user.first_name.includes(input)) {
        return user;
      }
    });
    console.log(filter);
  };

  const handleChangeInput = (e) => {
    setInput(e.target.value);
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
  useEffect(() => {
    filterByName();
  }, [input]);
  return (
    <section className="card-list">
      <div>
        <input
          type="text"
          value={input}
          onChange={handleChangeInput}
          placeholder="Username"
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
