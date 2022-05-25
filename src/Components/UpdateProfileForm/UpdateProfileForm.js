import { updateProfile } from "firebase/auth";
import React, { useState } from "react";
import { toast } from "react-toastify";
import auth from "../../firebase_init";
import usePutUsers from "../../Hooks/usePutUsers";

const UpdateProfileForm = ({ setUpdateProfileForm }) => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");
  const { putUsersToDb } = usePutUsers();
  const updatedUser = { name, address };

  //   const handleCancle = () => {
  //     setUpdateProfileForm("");
  //   };

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    updateProfile(auth.currentUser, {
      displayName: { name },
      //   photoURL: { avatarUrl },
      //   phoneNumber: { phoneNumber },
    })
      .then(() => {
        console.log("Click");
        toast.success("Profile Updated.");
        // putUsersToDb(updatedUser);
        // setUpdateProfileForm("");
      })
      .catch((error) => {
        toast.error(error.massage);
      });
  };
  return (
    <div className="flex justify-center">
      <form
        onSubmit={handleUpdateProfile}
        class="form-control card px-10 bg-base-100 shadow-xl py-10"
      >
        <label class="input-group input-group-sm my-2">
          <span>Name</span>
          <input
            type="text"
            placeholder="Enter your full name"
            class="input input-bordered input-sm"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>

        <label class="input-group input-group-sm my-2">
          <span>Phone number</span>
          <input
            type="texe"
            placeholder="Enter your phone number"
            class="input input-bordered input-sm"
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </label>
        <label class="input-group input-group-sm my-2">
          <span>Address</span>
          <input
            type="text"
            placeholder="Enter your address"
            class="input input-bordered input-sm"
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </label>
        <label class="input-group input-group-sm my-2">
          <span>Avatar URL</span>
          <input
            type="text"
            class="input input-bordered input-sm"
            placeholder="Enter the avatar URL"
            onChange={(e) => setAvatarUrl(e.target.value)}
          />
        </label>
        <div className="flex justify-around mt-5">
          <button className="btn btn-success">Update profile</button>
          {/* <button onClick={handleCancle} className="btn btn-error">
            Cancle
          </button> */}
        </div>
      </form>
    </div>
  );
};

export default UpdateProfileForm;
