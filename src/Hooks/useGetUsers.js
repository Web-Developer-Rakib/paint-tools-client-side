import { useEffect, useState } from "react";

const useGetUsers = (isload) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://painttools.herokuapp.com/users", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [isload]);
  return { users };
};

export default useGetUsers;
