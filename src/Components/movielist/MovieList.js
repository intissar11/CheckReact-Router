import React from "react";
import MovieCard from "../moviecard/MovieCard";
const MovieList = ({ tab }) => {
  return (
    <div className="row">
      {tab.map((elem) => (
        <MovieCard elem={elem} key={elem.id} />
      ))}
    </div>
  );
};

export default MovieList;
