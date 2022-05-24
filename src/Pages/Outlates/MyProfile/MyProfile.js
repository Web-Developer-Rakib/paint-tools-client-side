import React from "react";
import { useForm } from "react-hook-form";
import useFirebase from "../../../Hooks/useFirebase";
import useGetUsers from "../../../Hooks/useGetUsers";
import avatar from "../../../Images/avatar.png";

const MyProfile = () => {
  const { userInfo } = useFirebase();
  const { users } = useGetUsers();
  const { displayName, email, metadata, phoneNumber, photoURL } = userInfo;
  const { register, handleSubmit } = useForm();
  const onSubmit = async (d) => console.log(d);
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
                    <img src={photoURL === null ? avatar : photoURL} alt="" />
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
      <div class="modal" id="updateUserModal">
        <div class="modal-box">
          <h3 className="text-2xl my-5">Update profile</h3>
          <form
            onSubmit={() => handleSubmit(onSubmit)}
            className="flex flex-col items-center"
          >
            <input
              type="text"
              placeholder="Name"
              class="input input-bordered input-sm w-full max-w-xs my-3"
              {...register("name")}
            />
            <input
              type="number"
              placeholder="Phone"
              class="input input-bordered input-sm w-full max-w-xs my-3"
              {...register("number")}
            />
            <input type="file" placeholder="Type here" class="input my-3" />
            <div class="modal-action">
              <a href="#a" class="btn">
                Close
              </a>
              <button className="btn btn-success">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
