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

const useFirebase = () => {
  const [userInfo, setUserInfo] = useState({});
  console.log(userInfo);
  const { putUsersToDb } = usePutUsers();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  //Google signup
  const googleProvider = new GoogleAuthProvider();
  const handleGoogleProvider = async () => {
    const email = await userInfo?.email;
    console.log(email);
    const admin = false;
    const usersData = { email, admin };
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUserInfo(user);
        putUsersToDb(usersData);
        navigate(from, { replace: true });
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
