import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase_init";
import useFirebase from "../../Hooks/useFirebase";
import usePutUsers from "../../Hooks/usePutUsers";
import useToken from "../../Hooks/useToken";
import "./Register.css";

const Register = () => {
  const { setUserInfo, handleGoogleProvider } = useFirebase();
  const { putUsersToDb } = usePutUsers();
  const { handleJWT } = useToken();
  const navigate = useNavigate();
  const address = "Not added yet";
  const admin = false;
  const review = false;
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;
    const usersData = { email, admin, name, review, address };
    if (password !== confirmPassword) {
      toast.warn("Password did not matched.");
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
          await updateProfile(auth.currentUser, {
            displayName: name,
          });
          const user = userCredential.user;
          setUserInfo(user);
          sendEmailVerification(auth.currentUser);
          putUsersToDb(usersData);
          handleJWT(user.email);
          navigate("/thank-you");
        })
        .catch((error) => {
          const errorMessage = error.message;
          if (errorMessage === "Firebase: Error (auth/email-already-in-use).") {
            toast.warn("This email is already in use.");
          }
          if (errorMessage === "Firebase: Error (auth/invalid-email).") {
            toast.warn("Please enter a valid email.");
          }
          if (
            errorMessage === "Firebase: Error (auth/network-request-failed)."
          ) {
            toast.error("Please check your internet connection.");
          }
          if (
            errorMessage ===
            "Firebase: Password should be at least 6 characters (auth/weak-password)."
          ) {
            toast.warn("Password should be at least 6 characters.");
          }
        });
    }
  };
  return (
    <div className="flex justify-center">
      <div className="register-form-container">
        <div>
          <form onSubmit={handleRegister} className="register-form">
            <h3 className="my-3 text-3xl">Register</h3>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
            />{" "}
            <br />
            <input type="email" name="email" placeholder="Email" required />
            <br />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
            />{" "}
            <br />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm password"
              required
            />{" "}
            <br />
            <div className="flex justify-center">
              <button className="btn bg-indigo-700" type="submit">
                Register
              </button>
            </div>
          </form>
          <div class="divider">OR</div>
          <div className="flex justify-center">
            <button
              onClick={handleGoogleProvider}
              className="btn bg-blue-500 my-3"
            >
              Register with Google
            </button>
          </div>
          <p>
            Already have an account?{" "}
            <Link to="/login" className="form-links">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
