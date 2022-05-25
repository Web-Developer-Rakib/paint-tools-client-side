import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CheckoutForm from "../../Components/CheckoutForm/CheckoutForm";
const stripePromise = loadStripe(
  "pk_test_51L2h4fDjKuZH8y1K3cqKrihEuRFitJ1wD51tlEThvXtLaSwPMTnEl7IyipjhduTwMy3oCObBXqRdl1KriIXSCmTX00wufYrRGA"
);

const Payment = () => {
  const [orderedItem, setOrderedItem] = useState({});
  const { orderId } = useParams();
  useEffect(() => {
    fetch(`http://localhost:5000/order/${orderId}`)
      .then((res) => res.json())
      .then((data) => setOrderedItem(data));
  }, [orderId]);
  return (
    <div className="flex justify-center h-screen items-center">
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm orderedItem={orderedItem} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
