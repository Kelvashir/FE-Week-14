import React, { useState } from "react";
import MovieList from "./MovieList";
import { store } from "./store";

//Runs from index.js
function App() {
  const [movies, setMovies] = useState(store);

  //Runs the addReview function
  function addReview(ID, review) {
    const newMovies = [...movies];
    const index = newMovies.findIndex((movie) => movie.id === ID);
    newMovies[index].reviews.push(review);
    setMovies(newMovies);
  }

  //Pulls from the MovieList component
  return (
    <div>
      <h1>Movie Reviews</h1>
      <MovieList movies={movies} addReview={addReview} />
    </div>
  );
}

export default App;
