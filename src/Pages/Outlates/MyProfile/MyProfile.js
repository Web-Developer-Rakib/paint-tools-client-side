import React from "react";

const MyProfile = () => {
  return (
    <div>
      <h2 className="text-3xl my-5 ml-8">My profile</h2>
      <div className="flex justify-center items-center">
        <div class="card w-96 bg-base-100 shadow-xl">
          <div class="avatar flex justify-center">
            <div class="w-24 rounded-full">
              <img src="https://api.lorem.space/image/face?hash=92310" />
            </div>
          </div>
          <div class="card-body">
            <h2 class="card-title">Rakibul Hasan</h2>
            <p>
              <b>Email: </b>rakib@hasan.com
            </p>
            <p>
              <b>Location: </b>rakib@hasan.com
            </p>
            <p>
              <b>Phone number: </b>rakib@hasan.com
            </p>
            <p>
              <b>Email: </b>rakib@hasan.com
            </p>
            <p>
              <b>Current role: </b>rakib@hasan.com
            </p>
            <div class="card-actions">
              <button class="btn btn-primary">Update Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
