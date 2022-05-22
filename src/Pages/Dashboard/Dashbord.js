import React from "react";

const Dashbord = () => {
  return (
    <div class="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col items-center justify-center">
        {/* <!-- Page content here --> */}
      </div>
      <div class="drawer-side">
        <label for="my-drawer-2" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          <li>
            <a>My Orders</a>
          </li>
          <li>
            <a>Add A Review</a>
          </li>
          <li>
            <a>My profile</a>
          </li>
          <li>
            <a>Manage All Orders</a>
          </li>
          <li>
            <a>Add A Product</a>
          </li>
          <li>
            <a>Make Admin</a>
          </li>
          <li>
            <a>Manage Products</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashbord;
