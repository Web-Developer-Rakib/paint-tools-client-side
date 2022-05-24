import React from "react";
import useGetOrdersInfo from "../../../Hooks/useGetOrdersInfo";

const ManageAllOrders = () => {
  const { orders } = useGetOrdersInfo();
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
              <tr>
                <th>{order?.productName}</th>
                <td>{order?.customerName}</td>
                <td>{order?.quantity} units</td>
                <td>
                  {order?.shift ? (
                    <p>Shifted</p>
                  ) : (
                    <button className="btn btn-success">Shift now</button>
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
