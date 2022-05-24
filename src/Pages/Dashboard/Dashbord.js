import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Dashbord = () => {
  return (
    <div class="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content">{<Outlet></Outlet>}</div>
      <div class="drawer-side">
        <label for="my-drawer-2" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          <li>
            <NavLink to="/dashboard/my-orders">My Orders</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/add-a-review">Add A Review</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/my-profile">My profile</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/manage-all-orders">
              Manage All Orders
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/add-a-product">Add A Product</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/make-admin">Make Admin</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/manage-products">Manage Products</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashbord;
