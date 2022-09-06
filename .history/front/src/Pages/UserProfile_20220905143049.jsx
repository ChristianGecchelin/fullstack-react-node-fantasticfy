import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export const UserProfile = (props) => {
  console.log(props);
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

  const getUserFromDB = async () => {
    const response = await axios.get(`http://localhost:5005/users/${id}`);
    return response.data;
  };
  const getUsers = async () => {
    const response = await axios.get("http://localhost:5005/users");
    setUsers(response.data);
  };

  const getRelatedUsers = () => {
    if (users) {
      const filteredUsers = users.filter((user) => {
        console.log(employment.key_skill, user.employment.key_skill);
        return user.employment.key_skill === employment.key_skill;
      });
      setRelatedUsers(filteredUsers);
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      const dataUser = await getUserFromDB();
      setUserFromDB(dataUser);
    };
    fetchUser().catch(console.error());
  }, []);

  useEffect(() => {
    userFromDB && getUsers();
  }, [userFromDB]);

  return (
    <>
      {userFromDB ? (
        <div>
          <img src={avatar} alt="" />
          <div>
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
          <div>
            <h2>Related Users</h2>
            {/* {users.map(() => {
              return;
            })} */}
          </div>
        </div>
      ) : (
        <p>Cargando !</p>
      )}
    </>
  );
};
