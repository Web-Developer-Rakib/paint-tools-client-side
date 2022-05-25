import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import UpdateProfileForm from "../../../Components/UpdateProfileForm/UpdateProfileForm";
import useFirebase from "../../../Hooks/useFirebase";
import useGetUsers from "../../../Hooks/useGetUsers";
import defaultAvatar from "../../../Images/avatar.png";

const MyProfile = () => {
  const { userInfo } = useFirebase();
  const [updateProfileForm, setUpdateProfileForm] = useState("");
  const { users } = useGetUsers();
  const { displayName, email, metadata, phoneNumber, photoURL } = userInfo;
  const handleUpdateProfileIcon = () => {
    setUpdateProfileForm(
      <UpdateProfileForm
        setUpdateProfileForm={setUpdateProfileForm}
      ></UpdateProfileForm>
    );
  };
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
                    {user?.email}
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
                    <b>Address: </b>
                    {user?.address}
                  </p>
                  <p>
                    <b>Current role: </b>
                    {user?.admin ? <span>Admin</span> : <span>Customer</span>}
                  </p>
                  <div class="card-actions">
                    <div class="tooltip" data-tip="Update profile">
                      <button
                        onClick={handleUpdateProfileIcon}
                        class="btn btn-success"
                      >
                        <FontAwesomeIcon icon={faPencil}></FontAwesomeIcon>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )
        )}
      </div>
      <section className="my-10">{updateProfileForm}</section>
    </div>
  );
};

export default MyProfile;
