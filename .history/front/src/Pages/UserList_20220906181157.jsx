import { useEffect, useState } from "react";
import axios from "axios";
import { UserCard } from "../Components/UserCard";
import "./index.css";
import Pagination from "../Components/pagination";
export const UserList = () => {
  const [list, setList] = useState([]);
  const [inmutableList, setInmutableList] = useState([]);
  const [genderArray, setGenderArray] = useState([]);
  const [selectValue, setSelectValue] = useState("");
  const [input, setInput] = useState("");

  //getGenderArray es una función que obtiene primero todos los genders de los objetos y filtra los duplicados.
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
  //getUsers es el encargado de hacer la llamada al backend para obtener la lista de usuarios
  const getUsers = async () => {
    const response = await axios.get("http://localhost:5005/users");

    setList(response.data.slice(0, 20));
    setInmutableList(response.data);
  };

  //filterUsersBySelect es la encargada de filtrar a partir de lo seleccionado los generos similares
  const filterUsersBySelect = () => {
    const filter = inmutableList.filter((user) => {
      return user.gender === selectValue;
    });
    setList(filter);
  };

  //filterByName es la funcion que filtra segun coincidencias con el first_name, last_name y hasta username
  const filterByName = () => {
    let result = inmutableList.filter(
      (el) =>
        el.first_name.includes(input) ||
        el.last_name.includes(input) ||
        el.username.includes(input)
    );

    setList(result);
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
    <section className="section-page">
      <div className="container--search-bar">
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
      <div className="card-list">
        {list.length > 0 ? (
          list.map((user) => {
            return (
              <UserCard
                key={user.id}
                user={user}
                users={list}
                setInmutableList={setInmutableList}
                setList={setList}
              />
            );
          })
        ) : (
          <p>Cargando...</p>
        )}
      </div>
      <Pagination users={inmutableList} setList={setList} />
    </section>
  );
};
