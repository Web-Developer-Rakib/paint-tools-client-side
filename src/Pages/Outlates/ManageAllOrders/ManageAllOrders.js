import React from "react";

const ManageAllOrders = () => {
  return (
    <div>
      <h2 className=" text-3xl my-5 ml-8">Manage all orders</h2>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th>Product name</th>
              <th>Customer name</th>
              <th>Ordered</th>
              <th>Order status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Brush</th>
              <td>20$</td>
              <td>200 units</td>
              <td>Paid</td>
            </tr>
            <tr>
              <th>Brush</th>
              <td>20$</td>
              <td>200 units</td>
              <td>Paid</td>
            </tr>
            <tr>
              <th>Brush</th>
              <td>20$</td>
              <td>200 units</td>
              <td>Paid</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageAllOrders;
