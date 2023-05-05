import React, { useState } from "react";
import user from "../images/user.png";
import MovieDetail from "./MovieDetail";
import { useNavigate } from "react-router-dom";

export default function Movie({ data }) {

 const navigate = useNavigate()

  const handelDetail = () =>{
   navigate(`/movies/${data.id}`)
  } 
  return (
    <div>
        <div className="movie" onClick={()=>handelDetail()}>
          <img
            className="img-movie"
            src={"https://image.tmdb.org/t/p/w500" + data.poster_path}
          ></img>
          <div>
            <button className="btn-more">More...</button>
          </div>
        </div>
    </div>
  );
}
