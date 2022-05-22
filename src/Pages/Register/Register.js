import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";

const Register = () => {
  return (
    <div className="flex justify-center">
      <div className="register-form-container">
        <div>
          <form onSubmit="" className="register-form">
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
          <div className="flex justify-center">
            <button className="btn bg-blue-500 my-3">Login with Google</button>
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
