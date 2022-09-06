import { Link } from "react-router-dom";
import "./index.css";

export const UserCard = ({ user, users, setList, setInmutableList }) => {
  const { id, avatar, first_name: name, last_name: surname, username } = user;

  //handleDelete es la funcion que se ejecuta al tocar el botón delete y lo que hace es obtener todos los elementos que no coincidan con el id de la card seleccionada
  const handleDelete = () => {
    const renderUsers = users.filter((user) => user.id !== id);
    setInmutableList(renderUsers);
    setList(renderUsers);
  };

  return (
    <div className="user-card">
      <img src={avatar} alt="" />
      <div className="info-container">
        <p>Name: {name}</p>
        <p>Surname: {surname}</p>
        <Link to={`/user-profile/${id}`}>
          <p>Username: {username}</p>
        </Link>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};
