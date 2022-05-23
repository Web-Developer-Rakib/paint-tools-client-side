import React from "react";

const AddAReview = () => {
  return (
    <div>
      <h2 className="text-3xl my-5 ml-8">Add a review</h2>
      <div className="flex justify-center">
        <form class="form-control mt-7">
          <label class="input-group input-group-sm my-2">
            <span>Your Rating</span>
            <div class="rating">
              <input
                type="radio"
                name="rating-2"
                class="mask mask-star-2 bg-orange-400"
                value={1}
              />
              <input
                type="radio"
                name="rating-2"
                class="mask mask-star-2 bg-orange-400"
                value={2}
                checked
              />
              <input
                type="radio"
                name="rating-2"
                class="mask mask-star-2 bg-orange-400"
                value={3}
              />
              <input
                type="radio"
                name="rating-2"
                class="mask mask-star-2 bg-orange-400"
                value={4}
              />
              <input
                type="radio"
                name="rating-2"
                class="mask mask-star-2 bg-orange-400"
                value={5}
              />
            </div>
          </label>
          <label class="input-group input-group-sm my-2">
            <span>Your feedback</span>
            <textarea
              class="textarea textarea-bordered"
              placeholder="Type your feedback here."
              name="description"
              required
            ></textarea>
          </label>
          <div className="flex">
            <button className="btn bg-indigo-700">Submit review</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAReview;
