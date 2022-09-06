import React from "react";

export const UserProfile = () => {
  const [userFromDB, setUserFromDB] = useState("");
  const param = useParams();
  console.log(param);
  return <div>UserProfile</div>;
};
