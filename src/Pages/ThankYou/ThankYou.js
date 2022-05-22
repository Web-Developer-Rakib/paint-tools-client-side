import React from "react";
import useFirebase from "../../Hooks/useFirebase";

const ThankYou = () => {
  const { userInfo } = useFirebase();
  return (
    <div>
      <h1>{userInfo?.displayName}</h1>
      <h1>Thank you</h1>
    </div>
  );
};

export default ThankYou;
