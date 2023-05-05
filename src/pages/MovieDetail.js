import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import MovieContext from '../constexts/ContextMovie';

export default function MovieDetail() {
    const { movies } = useContext(MovieContext);
    const params = useParams()  
   
    const movie = movies.find((item)=>item.id==params.movieId)
    
useEffect(() => {
  console.log(movies)
  console.log(movie)
}, [])


  return (
    <div>qq</div>
  )
}
