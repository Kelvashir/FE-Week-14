import React from "react";
import Review from "./Review";

//Iterates through reviews
//Pulls from Review component
function ReviewList({ reviews }) {
  return (
    <fieldset className="reviewsContainer">
      <legend>Reviews:</legend>
      <section className="reviews">
        {reviews.map((review) => {
          return <Review key={review.id} review={review} />;
        })}
      </section>
      ;
    </fieldset>
  );
}
export default ReviewList;
