import React from "react";
import { useNavigate } from "react-router-dom";
import useFirebase from "../../../Hooks/useFirebase";
import useGetOrdersInfo from "../../../Hooks/useGetOrdersInfo";

const MyOrders = () => {
  const { orders } = useGetOrdersInfo();
  const { userInfo } = useFirebase();
  const navigate = useNavigate();
  return (
    <div>
      <h2 className=" text-3xl my-5 ml-8">My orders</h2>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th>Product name</th>
              <th>Price/unit</th>
              <th>Total price</th>
              <th>Order quantity</th>
              <th>Payment status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(
              (order) =>
                order?.customerEmail === userInfo?.email && (
                  <tr key={order?._id}>
                    <th>{order?.productName}</th>
                    <td>{order?.unitPrice}$</td>
                    <td>{order?.totalPrice}$</td>
                    <td>{order?.quantity} units</td>
                    <td>
                      {order?.paid ? (
                        <p className=" text-bold text-2xl text-green-500">
                          PAID
                        </p>
                      ) : (
                        <button
                          onClick={() => navigate(`/payment/${order?._id}`)}
                          className="btn btn-success"
                        >
                          Pay now
                        </button>
                      )}
                    </td>
                  </tr>
                )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
