import React from "react";
import { useNavigate } from "react-router-dom";
import useFirebase from "../../Hooks/useFirebase";

const PaymentSuccess = () => {
  const { userInfo } = useFirebase();
  const navigate = useNavigate();
  return (
    <div className="flex h-screen justify-center items-center">
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title"> Payment successful!</h2>
          <p>
            Dear {userInfo?.displayName}, Your payment is completed. Your
            products will be shipped within the next 24 hours. <br />
            Thank you... <br />
            <button
              onClick={() => navigate("/")}
              className="btn btn-primary btn-xs mt-3"
            >
              Go to home
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
