import React, { useState } from "react";

import uuid from "react-uuid";

//Setters
function ReviewForm({ ID, addReview }) {
  const [user, setUser] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState("");

  //Handlers
  const userHandler = (e) => {
    const formUser = e.target.value;
    setUser(formUser);
  };

  const reviewHandler = (e) => {
    const formReview = e.target.value;
    setReview(formReview);
  };

  const ratingHandler = (e) => {
    const formNumber = e.target.value;
    setRating(formNumber);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const uniqueID = uuid();

    addReview(ID, {
      user,
      id: uniqueID,
      review,
      rating,
    });

    resetForm();
  };

  //Form Reset
  function resetForm() {
    setUser("");
    setReview("");
  }

  //Builds review form
  return (
    <>
      <fieldset className="reviewFormContainer">
        <legend>Add a Review:</legend>
        <form onSubmit={submitHandler}>
          <label htmlFor="userName">User Name:</label>
          <input type="text" value={user} onChange={userHandler} />
          <br />
          <label htmlFor="review">Review:</label>
          <textarea
            rows="4"
            cols="30"
            value={review}
            onChange={reviewHandler}
            name="review"
          ></textarea>
          <br />

          <label htmlFor="rating">Rating:</label>
          <input
            type="number"
            min="1"
            max="5"
            placeholder="Enter a rating from 1 to 5"
            name="rating"
            onChange={ratingHandler}
          />

          <input type="submit" value="Submit" />
        </form>
      </fieldset>
    </>
  );
}
export default ReviewForm;
