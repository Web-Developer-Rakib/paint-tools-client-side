import React from "react";
import { toast } from "react-toastify";
import useFirebase from "../../../Hooks/useFirebase";

const AddAProduct = () => {
  const { userInfo } = useFirebase();
  const userName = userInfo?.displayName;
  const userEmail = userInfo?.email;
  const addAProduct = (e) => {
    e.preventDefault();
    const productName = e.target.productName.value;
    const price = e.target.price.value;
    const avaiableStock = e.target.avaiableStock.value;
    const minimumOrder = e.target.minimumOrder.value;
    const description = e.target.description.value;
    const imageUrl = e.target.imageUrl.value;
    const productsInfo = {
      productName,
      userName,
      userEmail,
      price,
      avaiableStock,
      minimumOrder,
      description,
      imageUrl,
    };
    if (price < 1 || avaiableStock < 1 || minimumOrder < 1) {
      toast.warn("All fields need positive amount.");
    } else if (minimumOrder > avaiableStock) {
      toast.warn(
        "Minimum order quantity should not be more then available stock."
      );
    } else {
      fetch("http://localhost:5000/add-product", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productsInfo),
      })
        .then((response) => response.json())
        .then(() => {
          toast.success("Product added successfully.");
          e.target.reset();
        })
        .catch(() => {
          toast.error("Something went wrong.");
        });
    }
  };
  return (
    <div>
      <h2 className="text-3xl my-5 ml-8">Add a product</h2>
      <div className="flex justify-center">
        <form
          onSubmit={addAProduct}
          class="form-control card w-150 bg-base-100 shadow-xl pl-10 py-10"
        >
          <label class="input-group input-group-sm my-2">
            <span>Product name</span>
            <input
              type="text"
              placeholder="Product name"
              class="input input-bordered input-sm"
              name="productName"
              required
            />
          </label>
          <label class="input-group input-group-sm my-2">
            <span>Price</span>
            <input
              type="number"
              placeholder="Price/unit"
              class="input input-bordered input-sm"
              name="price"
              required
            />
          </label>
          <label class="input-group input-group-sm my-2">
            <span>Available stock</span>
            <input
              type="number"
              placeholder="Available stock"
              class="input input-bordered input-sm"
              name="avaiableStock"
              required
            />
          </label>
          <label class="input-group input-group-sm my-2">
            <span>Minimum order</span>
            <input
              type="number"
              placeholder="Minimum order"
              class="input input-bordered input-sm"
              name="minimumOrder"
              required
            />
          </label>
          <label class="input-group input-group-sm my-2">
            <span>Description</span>
            <textarea
              class="textarea textarea-bordered"
              placeholder="Type product description here."
              name="description"
              required
            ></textarea>
          </label>
          <label class="input-group input-group-sm my-2">
            <span>Product image</span>
            <input
              type="url"
              placeholder="Product image url"
              class="input input-bordered input-sm"
              name="imageUrl"
              required
            />
          </label>
          <div className="flex mt-5">
            <button className="btn bg-indigo-700">Add product</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAProduct;
