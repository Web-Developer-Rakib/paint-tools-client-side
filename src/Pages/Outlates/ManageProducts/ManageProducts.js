import React from "react";
import { toast } from "react-toastify";
import useGetAllProducts from "../../../Hooks/useGetAllProducts";

const ManageProducts = () => {
  const { products, setProducts } = useGetAllProducts();
  const handleDelete = (id) => {
    fetch(`https://painttools.herokuapp.com/delete-product/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount === 1) {
          toast.success("Product deleted successfuly.");
          setProducts(products.filter((product) => product?._id !== id));
        } else {
          toast.error("Something went wrong.");
        }
      });
  };
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
                <td>{product?.avaiableStock} units</td>
                <td>{product?.price}$/unit</td>
                <td>
                  <button
                    onClick={() => handleDelete(product?._id)}
                    className="btn btn-error"
                  >
                    Delete
                  </button>
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
