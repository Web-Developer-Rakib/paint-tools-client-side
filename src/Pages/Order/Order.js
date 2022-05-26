import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useFirebase from "../../Hooks/useFirebase";
import useGetSingleProduct from "../../Hooks/useGetSingleProduct";

const Order = () => {
  const { product } = useGetSingleProduct();
  const { productName, avaiableStock, minimumOrder, imageUrl } = product;
  const { userInfo } = useFirebase();
  const navigate = useNavigate();
  const handlePlaceOrder = (e) => {
    e.preventDefault();
    const quantity = e.target.quantity.value;
    if (quantity < 1) {
      toast.warn("Please enter one or more.");
    } else if (quantity > product?.avaiableStock) {
      toast.warn("You can not order more than available stock.");
    } else if (quantity < product?.minimumOrder) {
      toast.warn(`You have to order minimum ${product?.minimumOrder} unites`);
    } else {
      const productName = product?.productName;
      const customerName = userInfo?.displayName;
      const customerEmail = userInfo?.email;
      const unitPrice = product?.price;
      const paid = false;
      const shift = false;
      const totalPrice = parseFloat(quantity) * parseFloat(unitPrice);
      const orderInfo = {
        productName,
        customerName,
        customerEmail,
        quantity,
        unitPrice,
        totalPrice,
        shift,
        paid,
      };
      fetch("http://localhost:5000/post-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderInfo),
      })
        .then((response) => response.json())
        .then(() => {
          toast.success("Porduct added to your order list.");
          navigate("/dashboard/my-orders");
          e.target.reset();
        })
        .catch(() => {
          toast.error("Something went wrong.");
        });
    }
  };
  return (
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img src={imageUrl} alt="" class="max-w-sm rounded-lg shadow-2xl" />
        <form onSubmit={handlePlaceOrder}>
          <h1 class="text-5xl font-bold">Welcome to order page</h1>
          <p class="py-6">
            Dear {userInfo?.displayName}, <br />
            Thank's for ordering <b>{productName}</b>. Currently we have{" "}
            <b>{avaiableStock}</b> unites available. And our minimum order
            quantity is <b>{minimumOrder}</b>. Please make sure that before
            place order. <br /> Thank you.
          </p>
          <label class="input-group input-group-sm my-5">
            <span>Quantity</span>
            <input
              type="number"
              placeholder="Enter quantity"
              class="input input-bordered input-sm"
              name="quantity"
              required
            />
          </label>
          <button class="btn btn-primary">Add to wishlist</button>
        </form>
      </div>
    </div>
  );
};

export default Order;
