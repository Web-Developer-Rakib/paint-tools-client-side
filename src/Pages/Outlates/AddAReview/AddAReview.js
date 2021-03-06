import React, { useState } from "react";
import { toast } from "react-toastify";
import useFirebase from "../../../Hooks/useFirebase";
import useGetUsers from "../../../Hooks/useGetUsers";

const AddAReview = () => {
  const [count, setCount] = useState(5);
  const { userInfo } = useFirebase();
  const [isLoad, setIsLoad] = useState(false);
  const { users } = useGetUsers(isLoad);
  const currentUser = users.filter((user) => user.email === userInfo.email);
  const reviewed = currentUser[0]?.review;
  const { displayName, photoURL, email } = userInfo;
  const review = true;
  const reviewStatus = { review, email };
  const handleSubmitReview = (e) => {
    e.preventDefault();
    const reviewersName = displayName;
    const reviewersEmail = email;
    const rating = count;
    const comment = e.target.comment.value;
    const reviewersPhoto = photoURL;
    const reviewersData = {
      reviewersName,
      reviewersEmail,
      rating,
      comment,
      reviewersPhoto,
    };
    fetch("https://painttools.herokuapp.com/add-review", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reviewersData),
    })
      .then((response) => response.json())
      .then(() => {
        fetch(`https://painttools.herokuapp.com/update-review-status`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(reviewStatus),
        })
          .then((response) => response.json())
          .then(() => {
            toast.success("Review submitted successfuly.");
            setIsLoad(!isLoad);
          });
      })
      .catch(() => {
        toast.error("Something went wrong.");
      });
  };
  return (
    <div>
      <h2 className="text-3xl my-5 ml-8">Add a review</h2>
      {reviewed ? (
        <div className="flex justify-center items-center h-[400px]">
          <h1 className="font-bold text-success text-5xl text-center">
            You already submited your review.
          </h1>
        </div>
      ) : (
        <>
          <h3 className="text-xl text-error text-center">
            <b>Note: </b>You can only submit review once in a lifetime . And
            it's unchangable.
          </h3>
          <div className="flex justify-center">
            <form onSubmit={handleSubmitReview} class="form-control mt-7">
              <label class="input-group input-group-sm my-2">
                <span>Your Rating</span>
                <div class="rating">
                  <input
                    type="radio"
                    name="rating-2"
                    class="mask mask-star-2 bg-orange-400"
                    onClick={() => setCount(1)}
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    class="mask mask-star-2 bg-orange-400"
                    onClick={() => setCount(2)}
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    class="mask mask-star-2 bg-orange-400"
                    onClick={() => setCount(3)}
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    class="mask mask-star-2 bg-orange-400"
                    onClick={() => setCount(4)}
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    class="mask mask-star-2 bg-orange-400"
                    onClick={() => setCount(5)}
                  />
                  <span className="ml-1 font-bold">{count}/5</span>
                </div>
              </label>
              <label class="input-group input-group-sm my-2">
                <span>Your feedback</span>
                <textarea
                  class="textarea textarea-bordered"
                  placeholder="Type your feedback here."
                  name="comment"
                  required
                ></textarea>
              </label>
              <div className="flex">
                <button className="btn bg-indigo-700">Submit review</button>
              </div>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default AddAReview;
