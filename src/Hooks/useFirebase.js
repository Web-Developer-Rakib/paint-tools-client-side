import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../firebase_init";
import usePutUsers from "./usePutUsers";
import useToken from "./useToken";

const useFirebase = () => {
  const [userInfo, setUserInfo] = useState({});
  const { putUsersToDb } = usePutUsers();
  const { handleJWT } = useToken();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  //Google signup
  const googleProvider = new GoogleAuthProvider();
  const admin = false;
  const review = false;
  const address = "Not added yet";
  const handleGoogleProvider = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        const email = user.email;
        const name = user.displayName;
        const usersData = { email, admin, name, review, address };
        setUserInfo(user);
        putUsersToDb(usersData);
        handleJWT(email);
        navigate(from, { replace: true });
        toast.success("Login successfull.");
      })
      .catch((error) => {
        const errorMessage = error.message;
        if (errorMessage === "Firebase: Error (auth/popup-closed-by-user).") {
          toast.warn("Popup closed by user.");
        }
        if (
          errorMessage === "Firebase: Error (auth/cancelled-popup-request)."
        ) {
          toast.error("No internet connection.");
        }
      });
  };

  // On auth state change
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUserInfo(user);
    });
  }, []);

  return { userInfo, setUserInfo, handleGoogleProvider };
};

export default useFirebase;
