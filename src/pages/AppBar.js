import React, { useContext, useState } from "react";
import logout from "../images/logout.svg";
import { useNavigate } from "react-router-dom";
import MovieContext from "../constexts/ContextMovie";

export default function AppBar() {
const [searchQuery, setSearchQuery] = useState()

const { searchMovie } = useContext(MovieContext);

const navigate = useNavigate();
  const handelLogOut = () => {
    localStorage.clear();
    navigate("/");
  };

const handelSearch = (e)=>{
  setSearchQuery((e.target.value))
  
}

const submitSearch =async (event) =>{
  event.preventDefault();
  console.log(searchQuery)
  await searchMovie(searchQuery)
}
  
  return (
    <div className="appbar-container">
      <div className="appbar-form-container">
        <form className="appbar-form">
          <label>Search Movie</label>
          <div>
            <input className="search-movie-input" type="text" autoFocus onChange={(e)=>handelSearch(e)} />
            <button className="btn-search" onClick={submitSearch} >Search</button>
          </div>
        </form>
      </div>
      <button className="btn-logout">
        <img
          className="img-logout"
          src={logout}
          onClick={() => handelLogOut()}
        ></img>
      </button>
    </div>
  );
}
