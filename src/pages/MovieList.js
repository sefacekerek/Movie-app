import React, { useContext, useEffect } from "react";
import Movie from "./Movie";
import MovieContext from "../constexts/ContextMovie";

export default function MovieList() {
  const { movies, listMovies } = useContext(MovieContext);
  

  useEffect(() => {
    listMovies();
  }, []);
 
  return (
    <div className="movie-list-container">
    {movies.map((e, index) => (
        <Movie key={index} data={e}></Movie>
      ))}
    </div>
  );
}
