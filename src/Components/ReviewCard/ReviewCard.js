import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Rating from "react-rating";
import defaultAvater from "../../Images/avatar.png";
import "./ReviewCard.css";

const ReviewCard = ({ review }) => {
  const { reviewersName, rating, comment, reviewersPhoto } = review;
  return (
    <div class="card card-compact w-60 bg-base-100 shadow-xl mb-5">
      <div class="card-body">
        <div class="avatar mt-5">
          <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img
              src={reviewersPhoto === null ? defaultAvater : reviewersPhoto}
              alt=""
            />
          </div>
        </div>
        <h2 class="card-title">{reviewersName}</h2>
        <h4>
          <Rating
            initialRating={rating}
            emptySymbol={<FontAwesomeIcon icon={faStar} />}
            fullSymbol={
              <FontAwesomeIcon style={{ color: "goldenrod" }} icon={faStar} />
            }
            readonly
          ></Rating>
          <span className="ml-1 font-bold ">{rating}/5</span>
        </h4>{" "}
        <p className="review-text">{comment}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
