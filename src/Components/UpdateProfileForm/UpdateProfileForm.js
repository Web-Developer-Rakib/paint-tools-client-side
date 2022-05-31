import { updateProfile } from "firebase/auth";
import React from "react";
import { toast } from "react-toastify";
import auth from "../../firebase_init";
import useFirebase from "../../Hooks/useFirebase";

const UpdateProfileForm = ({ setUpdateProfileForm, isload, setIsload }) => {
  const { userInfo } = useFirebase();

  const handleCancle = () => {
    setUpdateProfileForm("");
  };

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const email = userInfo?.email;
    const name = e.target.name.value;
    const address = e.target.address.value;
    const photoURL = e.target.photoURL.value;
    // const review = false;
    const updatedUsersData = { email, name, address };
    const reviewersData = { email, name, photoURL };
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    })
      .then(() => {
        fetch("https://painttools.herokuapp.com/update-user", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedUsersData),
        })
          .then((response) => response.json())
          .then(() => {
            // setData(data);
          })
          .catch(() => {
            // setError(error);
          });
        fetch(`https://painttools.herokuapp.com/update-reviewers-info`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(reviewersData),
        })
          .then((response) => response.json())
          .then(() => {
            toast.success("Profile updated successfuly.");
          });
        setUpdateProfileForm("");
        setIsload(!isload);
      })
      .catch(() => {
        toast.error("Something went wrong.");
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
            required
            name="name"
          />
        </label>
        <label class="input-group input-group-sm my-2">
          <span>Address</span>
          <input
            type="text"
            placeholder="Enter your address"
            class="input input-bordered input-sm"
            required
            name="address"
          />
        </label>
        <label class="input-group input-group-sm my-2">
          <span>Avatar URL</span>
          <input
            type="text"
            class="input input-bordered input-sm"
            placeholder="Enter the avatar URL"
            name="photoURL"
            required
          />
        </label>
        <div className="flex justify-around mt-5">
          <button className="btn btn-success">Update profile</button>
          <button onClick={handleCancle} className="btn btn-error">
            Cancle
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProfileForm;
