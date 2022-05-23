import React from "react";

const MakeAdmin = () => {
  return (
    <div>
      <h2 className=" text-3xl my-5 ml-8">Make an admin</h2>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Current role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Rakib</th>
              <td>rakib@hasan.com</td>
              <td>User</td>
              <td>
                <button className="btn bg-green-500">Make admin</button>
              </td>
            </tr>
            <tr>
              <th>Rakib</th>
              <td>rakib@hasan.com</td>
              <td>User</td>
              <td>
                <button className="btn bg-green-500">Make admin</button>
              </td>
            </tr>
            <tr>
              <th>Rakib</th>
              <td>rakib@hasan.com</td>
              <td>User</td>
              <td>
                <button className="btn bg-green-500">Make admin</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MakeAdmin;
