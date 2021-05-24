import React from "react";
import MovieCard from "../moviecard/MovieCard";
const MovieList = ({ movielist }) => {
  return (
    <div className="row">
      {movielist.map(elem => 
        <MovieCard elem={elem} key={elem.id} />
      )}
    </div>
  )
}

export default MovieList;
