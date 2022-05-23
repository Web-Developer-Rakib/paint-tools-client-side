import React from "react";
import useFirebase from "../../Hooks/useFirebase";
import useGetSingleProduct from "../../Hooks/useGetSingleProduct";

const Order = () => {
  const { product } = useGetSingleProduct();
  const { userInfo } = useFirebase();
  const handlePlaceOrder = (e) => {
    e.preventDefault();
  };
  return (
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://api.lorem.space/image/movie?w=260&h=400"
          class="max-w-sm rounded-lg shadow-2xl"
        />
        <form onSubmit={handlePlaceOrder}>
          <h1 class="text-5xl font-bold"></h1>
          <p class="py-6">
            Dear {userInfo?.displayName}, <br />
            Thank's for ordering <b>{product?.productName}</b>. Currently we
            have <b>{product?.avaiableStock}</b> unites available. And our
            minimum order quantity is <b>{product?.minimumOrder}</b>. Please
            make sure that before place order. <br /> Thank you.
          </p>
          <label class="input-group input-group-sm my-5">
            <span>Quantity</span>
            <input
              type="number"
              placeholder="Enter quantity"
              class="input input-bordered input-sm"
              name="avaiableStock"
              required
            />
          </label>
          <button class="btn btn-primary">Place order</button>
        </form>
      </div>
    </div>
  );
};

export default Order;
