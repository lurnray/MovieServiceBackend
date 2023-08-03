// components/MovieDetails.js
import React from "react";

const MovieDetails = ({ movie }) => {
  return (
    <div>
      <h2>{movie.title}</h2>
      <p>Year: {movie.year}</p>
      {/* Display other movie details */}
    </div>
  );
};

export default MovieDetails;