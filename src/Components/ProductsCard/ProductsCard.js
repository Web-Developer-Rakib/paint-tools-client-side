import React from "react";
import "./ProductCard.css";

const ProductsCard = ({ product }) => {
  const { productName, price, avaiableStock, minimumOrder, description, _id } =
    product;
  return (
    <div class="card w-80 bg-base-100 shadow-xl mb-5">
      <figure>
        <img
          src="https://api.lorem.space/image/shoes?w=400&h=225"
          alt="Shoes"
        />
      </figure>
      <div class="card-body">
        <h2 class="card-title">Shoes!</h2>
        <p>
          <b>Price: </b>
          <span>10$</span>
        </p>
        <p>
          <b>Available: </b>
          <span>10$</span>
        </p>
        <p>
          <b>Minimum oder: </b>
          <span>10$</span>
        </p>
        <p>
          <b>Short description: </b>
          <div className="description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
            voluptas consectetur tempore fuga, quidem rem quae nulla deserunt.
            Sit eaque maiores necessitatibus sed possimus dolores animi
            voluptates amet? Velit, voluptatum.
          </div>
        </p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
