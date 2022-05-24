import React from "react";
import useGetAllProducts from "../../../Hooks/useGetAllProducts";

const ManageProducts = () => {
  const { products } = useGetAllProducts();
  return (
    <div>
      <h2 className=" text-3xl my-5 ml-8">Manage products</h2>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th>Product name</th>
              <th>Available stock</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr>
                <th>{product?.productName}</th>
                <td>{product?.availableStock} units</td>
                <td>{product?.price} units</td>
                <td>
                  <button className="btn btn-error">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageProducts;
