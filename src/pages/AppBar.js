import React from "react";
import logout from "../images/logout.svg";
import { useNavigate } from "react-router-dom";

export default function AppBar() {
  const navigate = useNavigate();
  const handelLogOut = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <div className="appbar-container">
      <div className="appbar-form-container">
        <form className="appbar-form">
          <label>Search Movie</label>
          <div>
            <input className="search-movie-input" type="text" autoFocus />
            <button className="btn-search">Search</button>
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
