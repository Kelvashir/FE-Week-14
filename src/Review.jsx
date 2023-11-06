import React from "react";

//Builds reviews
function Review({ review }) {
  return (
    <div className="reviewContainer">
      <p className="reviewUser">{review.user}</p>
      <p className="review">{review.review}</p>
      <p className="rating">Rating: {review.rating}</p>
      <hr />
    </div>
  );
}
export default Review;
