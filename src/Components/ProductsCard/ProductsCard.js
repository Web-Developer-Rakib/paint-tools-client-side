import React from "react";
import { useNavigate } from "react-router-dom";
import "./ProductCard.css";

const ProductsCard = ({ product }) => {
  const { productName, price, avaiableStock, minimumOrder, description, _id } =
    product;
  const navigate = useNavigate();
  const handleOrder = (id) => {
    navigate(`/order/${id}`);
  };
  return (
    <div key={_id} class="card w-80 bg-base-100 shadow-xl mb-5">
      <figure>
        <img
          src="https://api.lorem.space/image/shoes?w=400&h=225"
          alt="Shoes"
        />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{productName}</h2>
        <p>
          <b>Price: </b>
          <span>{price}$</span>
        </p>
        <p>
          <b>Available: </b>
          <span>{avaiableStock} units</span>
        </p>
        <p>
          <b>Minimum oder: </b>
          <span>{minimumOrder} units</span>
        </p>
        <p>
          <b>Short description: </b>
          <div className="description">{description}</div>
        </p>
        <div class="card-actions justify-end">
          <button onClick={() => handleOrder(_id)} class="btn btn-primary">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
