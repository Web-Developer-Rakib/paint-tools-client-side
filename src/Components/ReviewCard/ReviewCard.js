import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Rating from "react-rating";
import "./ReviewCard.css";

const ReviewCard = () => {
  return (
    <div class="card card-compact w-60 bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="card-title">Maria Grahamble</h2>
        <h4>
          <Rating
            initialRating="3"
            emptySymbol={<FontAwesomeIcon icon={faStar} />}
            fullSymbol={
              <FontAwesomeIcon style={{ color: "goldenrod" }} icon={faStar} />
            }
            readonly
          ></Rating>
        </h4>
        <p className="review-text">
          If a dog chews shoes whose shoes does he choose?
        </p>
      </div>
    </div>
  );
};

export default ReviewCard;
