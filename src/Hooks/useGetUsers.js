import { useEffect, useState } from "react";

const useGetUsers = (isload) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [isload]);
  return { users };
};

export default useGetUsers;
