import React from "react";

const AddAProduct = () => {
  return (
    <div>
      <h2 className="text-3xl my-5 ml-8">Add a product</h2>
      <div className="flex justify-center">
        <form class="form-control">
          <label class="input-group input-group-sm my-2">
            <span>Product name</span>
            <input
              type="text"
              placeholder="Enter the product name"
              class="input input-bordered input-sm"
            />
          </label>
          <label class="input-group input-group-sm my-2">
            <span>Price</span>
            <input
              type="number"
              placeholder="Price/unit"
              class="input input-bordered input-sm"
            />
          </label>
          <label class="input-group input-group-sm my-2">
            <span>Available stock</span>
            <input
              type="number"
              placeholder="Available stock"
              class="input input-bordered input-sm"
            />
          </label>
          <label class="input-group input-group-sm my-2">
            <span>Minimum order</span>
            <input
              type="number"
              placeholder="Minimum order"
              class="input input-bordered input-sm"
            />
          </label>
          <label class="input-group input-group-sm my-2">
            <span>Description</span>
            <textarea
              class="textarea textarea-bordered"
              placeholder="Type product description here."
            ></textarea>
          </label>
          <label class="input-group input-group-sm my-2">
            <span>Product image</span>
            <input type="file" class="input input-bordered input-md" />
          </label>
          <div className="flex">
            <button className="btn bg-indigo-700">Add product</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAProduct;
