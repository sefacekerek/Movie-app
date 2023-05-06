import React, { useContext} from 'react'
import { useParams } from 'react-router-dom';
import MovieContext from '../constexts/ContextMovie';

export default function MovieDetail() {
    const { movies } = useContext(MovieContext);
    const params = useParams()  
   
    const movie = movies.find((item)=>item.id==params.movieId)
  

  return (
    <div style={{height:"100vh"}}>
        <div className="movie-detail-container">
          <img
            className="img-movie-detail"
            src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
          ></img>
          <p>Titel : {movie.title}</p>
          <p>Overview : {movie.overview}</p>
        </div>
    </div>
  )
}
