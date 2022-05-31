import React, { useState } from "react";
import { toast } from "react-toastify";
import useGetUsers from "../../../Hooks/useGetUsers";

const MakeAdmin = () => {
  const [isLoad, setIsLoad] = useState(false);
  const { users } = useGetUsers(isLoad);
  //Make admin
  const handleMakeAdmin = (email) => {
    const admin = true;
    const usersEmail = email;
    const data = { admin, usersEmail };
    fetch(`https://painttools.herokuapp.com/make-admin`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then(() => {
        toast.success("Admin created successfuly.");
        setIsLoad(!isLoad);
      })
      .catch(() => {
        toast.error("Something went wrong.");
      });
  };
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
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user?.name}</td>
                <td>{user?.email}</td>
                <td>{user?.admin ? "Admin" : "Customer"}</td>
                <td>
                  {!user?.admin && (
                    <button
                      onClick={() => handleMakeAdmin(user?.email)}
                      className="btn btn-success"
                    >
                      Make admin
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MakeAdmin;
