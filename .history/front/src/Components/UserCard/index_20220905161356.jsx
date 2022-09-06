import { Link } from "react-router-dom";

import "./index.css";
export const UserCard = ({ user, users, setList }) => {
  console.log(users);
  const { id, avatar, first_name: name, last_name: surname, username } = user;

  return (
    <div className="user-card">
      <img src={avatar} alt="" />
      <div className="info-container">
        <p>Name: {name}</p>
        <p>Surname: {surname}</p>
        <Link to={`/user-profile/${id}`}>
          <p>Username: {username}</p>
        </Link>
        <button>Eliminar</button>
      </div>
    </div>
  );
};
