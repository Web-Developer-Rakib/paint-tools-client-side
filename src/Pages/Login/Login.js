import { signInWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase_init";
import useFirebase from "../../Hooks/useFirebase";
import "./Login.css";

const Login = () => {
  const { setUserInfo, handleGoogleProvider } = useFirebase();
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUserInfo(user);
        navigate("/thank-you");
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
      });
  };
  return (
    <div>
      <div className="flex justify-center">
        <div className="login-form-container">
          <div>
            <form onSubmit={handleLogin} className="login-form">
              <h3 className="my-3 text-3xl">Login</h3>
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
              />{" "}
              <br />
              <input
                type="password"
                name="password"
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
            <div class="divider">OR</div>
            <div className="flex justify-center">
              <button
                onClick={handleGoogleProvider}
                className="btn bg-blue-500 my-3"
              >
                Login with Google
              </button>
            </div>
            <p>
              New here?{" "}
              <Link to="/register" className="form-links">
                Register
              </Link>
            </p>
            <p>
              Forgot password? <span className="form-links">Reset now</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
