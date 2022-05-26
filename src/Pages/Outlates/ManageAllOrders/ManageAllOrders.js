import React, { useState } from "react";
import { toast } from "react-toastify";
import useGetOrdersInfo from "../../../Hooks/useGetOrdersInfo";

const ManageAllOrders = () => {
  const [isLoad, setIsLoad] = useState(false);
  const { orders } = useGetOrdersInfo(isLoad);

  const handleShift = (id) => {
    console.log(id);
    const shift = true;
    const shippingData = { shift, id };
    fetch(`http://localhost:5000/update-shipping-status`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(shippingData),
    })
      .then((response) => response.json())
      .then((data) => {
        toast.success("Product shifted successfuly.");
        setIsLoad(!isLoad);
      })
      .catch(() => {
        toast.error("Something went wrong.");
      });
  };
  return (
    <div>
      <h2 className=" text-3xl my-5 ml-8">Manage all orders</h2>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th>Product name</th>
              <th>Customer name</th>
              <th>Ordered units</th>
              <th>Order status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order?._id}>
                <th>{order?.productName}</th>
                <td>{order?.customerName}</td>
                <td>{order?.quantity} units</td>
                <td>
                  {!order?.paid ? (
                    <p className="uppercase font-bold text-warning">
                      Not paid yet
                    </p>
                  ) : order?.paid && !order?.shift ? (
                    <button
                      onClick={() => handleShift(order?._id)}
                      className="btn btn-success"
                    >
                      Shift now
                    </button>
                  ) : (
                    <p className="uppercase font-bold text-success">Shifted</p>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageAllOrders;
