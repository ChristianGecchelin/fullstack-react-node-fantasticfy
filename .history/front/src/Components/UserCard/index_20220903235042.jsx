import React, { useState } from "react";
import { Link,useParams } from "react-router-dom";

import "./index.css";
export const UserCard = ({ user }) => {
  const { id, avatar, first_name: name, last_name: surname, username } = user;
  const [userFromDB, setUserFromDB] = useState("");
  const id=useParams()
  const getUserFromDB=async()=>{
    const response=axios.get('/users/${}')
  }
  useEffect(() => {
    
  
    }
  }, [third])
  

  return (
    <div className="user-card">
      <img src={avatar} alt="" />
      <div className="info-container">
        <p>Name: {name}</p>
        <p>Surname: {surname}</p>
        <Link to={`/user-profile/${id}`}>
          <p>Username: {username}</p>
        </Link>
      </div>
    </div>
  );
};
