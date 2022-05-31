import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase_init";
import useFirebase from "../../Hooks/useFirebase";
import useToken from "../../Hooks/useToken";
import "./Login.css";

const Login = () => {
  const { setUserInfo } = useFirebase();
  const [loading, setLoading] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { handleJWT } = useToken();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const handleLogin = (e) => {
    setLoading(<progress class="progress w-56"></progress>);
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUserInfo(user);
        handleJWT(email);
        toast.success("Login Successful.");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        if (errorMessage === "Firebase: Error (auth/wrong-password).") {
          toast.warn("Wrong password.");
        }
        if (errorMessage === "Firebase: Error (auth/network-request-failed).") {
          toast.error("Please check your internet connection.");
        }
        if (errorMessage === "Firebase: Error (auth/missing-email).") {
          toast.warn("Please enter your email.");
        }
        if (errorMessage === "Firebase: Error (auth/user-not-found).") {
          toast.warn("This email is not registered yet.");
        }
        if (errorMessage === "Firebase: Error (auth/invalid-email).") {
          toast.warn("Please enter a valid email.");
        }
      })
      .finally(() => {
        setLoading("");
      });
  };
  //Password reset function
  const handlePasswordReset = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success("Password reset email sent.");
      })
      .catch((error) => {
        const errorMessage = error.message;
        if (errorMessage === "Firebase: Error (auth/missing-email).") {
          toast.warn("Please enter your email.");
        }
        if (errorMessage === "Firebase: Error (auth/user-not-found).") {
          toast.warn("This email is not registered yet.");
        }
        if (errorMessage === "Firebase: Error (auth/invalid-email).") {
          toast.warn("Please enter a valid email.");
        }
        if (errorMessage === "Firebase: Error (auth/network-request-failed).") {
          toast.error("Please check your internet connection.");
        }
      });
  };
  return (
    <div className="h-screen">
      <div className="flex justify-center">
        <div className="login-form-container">
          <div>
            <form onSubmit={handleLogin} className="login-form">
              <h3 className="my-3 text-3xl">Login</h3>
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
              />{" "}
              <br />
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
              />{" "}
              <br />
              <div className="flex justify-center">
                <button className="btn bg-indigo-700" type="submit">
                  Login
                </button>
              </div>
            </form>
            {loading}
            <p>
              New here?{" "}
              <Link to="/register" className="form-links">
                Register
              </Link>
            </p>
            <p>
              Forgot password?{" "}
              <span onClick={handlePasswordReset} className="form-links">
                Reset now
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
