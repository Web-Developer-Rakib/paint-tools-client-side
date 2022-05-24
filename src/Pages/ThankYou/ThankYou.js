import React from "react";
import useFirebase from "../../Hooks/useFirebase";

const ThankYou = () => {
  const { userInfo } = useFirebase();
  return (
    <div className="flex h-screen justify-center items-center">
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title"> Thank you {userInfo?.displayName}</h2>
          <p>
            We have sent a verification email to <b>{userInfo?.email}</b>.
            Please check your inbox and very your email.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
