import React from "react";
import image from "../images/user.png"

export default function () {
  return (
    <div className="login-container">
      <h3>Please Login</h3>
      <form className="form-container">
        <img src={image} className="user-img"></img>
        <label className="form-email">Email</label>
        <input className="form-input"></input>
        <label className="form-password">Password</label>
        <input className="form-input"></input>
        <button className="form-button">Login</button>
      </form>
    </div>
  );
}
