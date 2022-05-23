import { useEffect, useState } from "react";

const useGetUsers = () => {
  const [users, setUsers] = useState();
  useEffect(() => {
    fetch("http://localhost:5000/add-product")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return { users };
};

export default useGetUsers;
