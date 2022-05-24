import React from "react";
import ReviewCard from "../../Components/ReviewCard/ReviewCard";
import useGetAllReviews from "../../Hooks/useGetAllReviews";

const AllReviews = () => {
  const { reviews } = useGetAllReviews();
  return (
    <div>
      <h2 className=" text-3xl my-5 ml-8">All reviews</h2>
      <div className="my-5 ml-8 mr-8 grid grid-cols-1 lg:grid-cols-3 place-items-center">
        {reviews.map((review) => (
          <ReviewCard review={review}></ReviewCard>
        ))}
      </div>
    </div>
  );
};

export default AllReviews;
