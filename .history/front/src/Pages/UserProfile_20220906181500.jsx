import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { UserCard } from "../Components/UserCard";

export const UserProfile = (props) => {
  const [userFromDB, setUserFromDB] = useState(false);
  const [relatedUsers, setRelatedUsers] = useState([]);
  const [users, setUsers] = useState(false);

  const { id } = useParams();
  const {
    avatar,
    first_name,
    last_name,
    email,
    gender,
    date_of_birth,
    address,
    employment,
  } = userFromDB;

  //getUserFromDB funcion que hace un llamado al backend para obtener el users que coincide con el id pasado
  const getUserFromDB = async () => {
    const response = await axios.get(`http://localhost:5005/users/${id}`);
    return response.data;
  };

  const getUsers = async () => {
    const response = await axios.get("http://localhost:5005/users");
    setUsers(response.data);
  };
  //getRelatedUsers nos muestra los users que coinciden en el key_skill con el de nuestro usuario principal
  const getRelatedUsers = () => {
    if (users) {
      const filteredUsers = users.filter((user) => {
        return user.employment.key_skill === employment.key_skill;
      });
      setRelatedUsers(filteredUsers);
    }
  };

  useEffect(() => {
    getUsers();
    const fetchUser = async () => {
      const dataUser = await getUserFromDB();
      setUserFromDB(dataUser);
    };
    fetchUser().catch(console.error());
  }, []);

  useEffect(() => {
    userFromDB && getRelatedUsers();
  }, [userFromDB]);

  return (
    <>
      {userFromDB ? (
        <div className="container-user">
          <img className="img-user" src={avatar} alt={avatar} />
          <div className="container-info">
            <h2>
              {first_name} {last_name}
            </h2>
            <hr />
            <div>
              <h3>Personal Info</h3>
              <p>Email: {email}</p>
              <p>Gender: {gender}</p>
              <p>Birth: {date_of_birth}</p>
            </div>
            <div>
              <h3>Info Location</h3>
              {address && (
                <>
                  <p>State: {address.city}</p>
                  <p>State: {address.state}</p>
                  <p>Country: {userFromDB.address.country}</p>
                  <p>Zip Code: {userFromDB.address.zip_code}</p>
                </>
              )}
            </div>
          </div>
          <div className="section-relatedUsers">
            <h2>Related Users</h2>
            <div className="container-relatedUsers">
              {relatedUsers.map((user) => {
                return <UserCard key={user.id} user={user} />;
              })}
            </div>
          </div>
        </div>
      ) : (
        <p>Cargando !</p>
      )}
    </>
  );
};
