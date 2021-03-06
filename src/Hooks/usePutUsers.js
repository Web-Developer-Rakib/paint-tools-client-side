import { useState } from "react";

const usePutUsers = () => {
  const [data, setData] = useState({});
  const [error, setError] = useState();
  const putUsersToDb = (usersData) => {
    fetch("https://painttools.herokuapp.com/put-user", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usersData),
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        setError(error);
      });
  };
  return { putUsersToDb, data, error };
};

export default usePutUsers;
