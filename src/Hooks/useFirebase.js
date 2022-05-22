import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../firebase_init";

const useFirebase = () => {
  const [userInfo, setUserInfo] = useState({});
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  //Google signup
  const googleProvider = new GoogleAuthProvider();
  const handleGoogleProvider = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUserInfo(user);
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
