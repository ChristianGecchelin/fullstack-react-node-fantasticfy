import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export const UserProfile = () => {
  const [userFromDB, setUserFromDB] = useState("");
  const param = useParams();
  console.log(param);
  return <div>UserProfile</div>;
};
