import React from "react";
import Movie from "./Movie";

//Iterates through movies
//Pulls from the Movie component
const MovieList = ({ movies, addReview }) => {
  return (
    <section>
      {movies.map((movie) => {
        return <Movie key={movie.id} movie={movie} addReview={addReview} />;
      })}
    </section>
  );
};

export default MovieList;
