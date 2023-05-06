import React, { useState } from "react";
import user from "../images/user.png";
import {
  authenticateUserRequest,
  createTokenRequest,
} from "../services/RequestMovie";
import { useNavigate } from "react-router-dom";

export default function () {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessageUserName, setMessageUserName] = useState("");
  const [errorMessagePassword, setMessagePassword] = useState("");
  const [errorMessageAuthenticateUser, setMessageAuthenticateUser] =
    useState("");

  const handelEmail = (e) => {
    setUserName(e.target.value);
  };

  const handelPassword = (e) => {
    setPassword(e.target.value);
  };

  const navigate = useNavigate();

  const validations = (userName, userPassword) => {
    if (userName == "") {
      const errorMessage = (
        <p style={{ color: "red" }}>You must enter a username</p>
      );
      setMessageUserName(errorMessage);
      return false;
    } else if (userName != "") {
      setMessageUserName("");
    }
    if (userPassword == "") {
      const errorMessage = (
        <p style={{ color: "red" }}>You must enter a password</p>
      );
      setMessagePassword(errorMessage);
      return false;
    } else if (userPassword != "") {
      setMessagePassword("");
    }
    if (userPassword.length < 7 && userPassword != "") {
      const errorMessage = (
        <p style={{ color: "red" }}>
          Password should be longer than 6 letters.
        </p>
      );
      setMessagePassword(errorMessage);
      return false;
    } else if (userPassword.length >= 7) {
      setMessagePassword("");
    }
    return true;
  };

  const submitLogin = async () => {
    const validation = validations(userName, password);
    if (validation == true) {
      try {
        const response = await createTokenRequest();
        const request_token = response.data.request_token;
        const authenticateUser = await authenticateUserRequest(
          userName,
          password,
          request_token
        );
        if ((authenticateUser.data.success = true)) {
          localStorage.setItem(
            "moviesToken",
            authenticateUser.data.request_token
          );
          navigate("/movies");
        }
      } catch (error) {
        const errorMessage = (
          <p style={{ color: "red" }}>
            Your username and password are incorrect.
          </p>
        );
        setMessageAuthenticateUser(errorMessage);
      }
    }
  };

  return (
    
      <div className="login-container">
        <h3>Please Login</h3>
        <form className="form-container">
          <img src={user} className="user-img"></img>
          <label className="form-email">UserName</label>
          <input
            className="form-input"
            autoFocus
            type="email"
            onChange={(e) => handelEmail(e)}
            required
          ></input>
          {errorMessageUserName}
          <label className="form-password">Password</label>
          <input
            className="form-input"
            type="password"
            onChange={(e) => handelPassword(e)}
            required
          ></input>
          {errorMessagePassword}
          {errorMessageAuthenticateUser}
          <button
            type="button"
            className="form-button"
            onClick={() => submitLogin()}
          >
            Login
          </button>
        </form>
      </div>
    
  );
}
