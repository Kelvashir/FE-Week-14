import React from "react";
import ReviewList from "./ReviewList";
import ReviewForm from "./ReviewForm";

//Builds movies
//Pulls from ReviewList and ReviewForm
function Movie({ movie, addReview }) {
  return (
    <article key={movie.id}>
      <h3>{movie.title}</h3>
      <header>
        <img className="thumbnail" src={movie.imgSrc} />
        <div className="details">
          <p>{movie.synopsis}</p>

          <div className="categories">
            <h4>Categories: {movie.categories}</h4>
          </div>
        </div>
      </header>
      <aside>
        <ReviewList reviews={movie.reviews} />
        <ReviewForm ID={movie.id} addReview={addReview} />
      </aside>
    </article>
  );
}

export default Movie;
