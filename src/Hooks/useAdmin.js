import useFirebase from "./useFirebase";
import useGetUsers from "./useGetUsers";

const useAdmin = () => {
  const { userInfo } = useFirebase();
  const { users } = useGetUsers();
  const currentUser = users.filter((user) => user?.email === userInfo?.email);
  const admin = currentUser[0]?.admin;
  return { admin };
};

export default useAdmin;
