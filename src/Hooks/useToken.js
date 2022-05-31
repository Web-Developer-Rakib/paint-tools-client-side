import { toast } from "react-toastify";

const useToken = () => {
  const handleJWT = (email) => {
    fetch(`https://painttools.herokuapp.com/jwt-token/${email}`, {
      method: "POST",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem("accessToken", data.accessToken);
      })
      .catch(() => {
        toast.error("Invalid access token.");
      });
  };
  return { handleJWT };
};

export default useToken;
