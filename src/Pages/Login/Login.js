import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div>
      <div className="flex justify-center">
        <div className="login-form-container">
          <div>
            <form onSubmit="" className="login-form">
              <h3 className="my-3 text-3xl">Login</h3>
              <input type="email" name="email" placeholder="Email" /> <br />
              <input
                type="password"
                name="password"
                placeholder="Password"
              />{" "}
              <br />
              <div className="flex justify-center">
                <button className="btn bg-indigo-700" type="submit">
                  Login
                </button>
              </div>
            </form>
            <div className="flex justify-center">
              <button className="btn bg-blue-500 my-3">
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
