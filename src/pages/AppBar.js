import React from "react";
import logout from "../images/logout.svg";

export default function AppBar() {
  return (
    <div className="appbar-container">
      <div className="appbar-form-container">
        <form className="appbar-form">
          <label>Search Movie</label>
          <div>
            <input className="search-movie-input" type="text" />
            <button className="btn-search">Search</button>
          </div>
        </form>
      </div>
      <button className="btn-logout">
        <img className="img-logout" src={logout}></img>
      </button>
    </div>
  );
}
