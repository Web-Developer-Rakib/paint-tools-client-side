import { signOut } from "firebase/auth";
import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase_init";
import useFirebase from "../../Hooks/useFirebase";
import Logo from "../../Images/logo.png";

const Navbar = () => {
  const navigate = useNavigate();
  const { userInfo } = useFirebase();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        localStorage.removeItem("accessToken");
        navigate("/login");
        toast.success("Signout successful.");
      })
      .catch((error) => {
        toast.error(error);
      });
  };
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/blogs">Blogs</NavLink>
      </li>
      <li>
        <NavLink to="/my-portfolio">My portfolio</NavLink>
      </li>
      <li>{userInfo && <NavLink to="/dashboard">Dashboard</NavLink>}</li>
    </>
  );
  const btnSet = (
    <>
      <Link to="/login" class="btn mb-3 lg:mb-0">
        Login
      </Link>
      <Link to="/register" class="btn">
        Register
      </Link>
    </>
  );
  const signOutBtn = (
    <button class="btn mb-3 lg:mb-0" onClick={handleSignOut}>
      Sign Out
    </button>
  );
  return (
    <div class="navbar bg-base-100">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
            <ul className="flex flex-col lg:hidden">
              {userInfo ? signOutBtn : btnSet}
            </ul>
          </ul>
        </div>
        <Link to="/" class="btn btn-ghost normal-case text-xl">
          <img src={Logo} alt="" />
        </Link>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal p-0">{navLinks}</ul>
      </div>
      <div class="navbar-end">
        <div className=" w-[200px] hidden lg:flex justify-around">
          {userInfo ? signOutBtn : btnSet}
        </div>
        <div class="dropdown" onClick={() => navigate("/dashboard")}>
          <label for="my-drawer-2" tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
