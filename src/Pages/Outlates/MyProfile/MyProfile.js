import React from "react";
import useFirebase from "../../../Hooks/useFirebase";
import useGetUsers from "../../../Hooks/useGetUsers";
import defaultAvatar from "../../../Images/avatar.png";

const MyProfile = () => {
  const { userInfo } = useFirebase();
  const { users } = useGetUsers();
  const { displayName, email, metadata, phoneNumber, photoURL } = userInfo;
  return (
    <div>
      <h2 className="text-3xl my-5 ml-8">My profile</h2>
      <div className="flex justify-center items-center">
        {users.map(
          (user) =>
            user.email === email && (
              <div class="card w-96 bg-base-100 shadow-xl">
                <div class="avatar flex justify-center">
                  <div class="w-24 rounded-full">
                    <img
                      src={photoURL === null ? defaultAvatar : photoURL}
                      alt=""
                    />
                  </div>
                </div>
                <div class="card-body">
                  <h2 class="card-title">{displayName}</h2>
                  <p>
                    <b>Email: </b>
                    {email}
                  </p>
                  <p>
                    <b>Member since: </b>
                    {metadata?.creationTime}
                  </p>
                  <p>
                    <b>Phone number: </b>
                    {phoneNumber === null && "Not added yet"}
                  </p>
                  <p>
                    <b>Current role: </b>
                    {user?.admin ? <span>Admin</span> : <span>Customer</span>}
                  </p>
                  <div class="card-actions">
                    <a href="#updateUserModal" class="btn btn-success">
                      Update Now
                    </a>
                  </div>
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default MyProfile;
