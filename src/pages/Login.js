import React, { useState } from "react";
import user from "../images/user.png"
import { authenticateUserRequest, createTokenRequest } from "../services/RequestMovie";
import { useNavigate } from "react-router-dom";

export default function () {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handelEmail = (e)=>{
    console.log(e)
    setEmail(e.target.value)
    
  }

  const handelPassword = (e)=>{
    setPassword(e.target.value)
  }

const navigate = useNavigate();

  const submitLogin =async ()=>{
    
      const response =await createTokenRequest();
      const request_token = response.data.request_token
      console.log(request_token)
      const authenticateUser = await authenticateUserRequest(email,password,request_token) 
      console.log(authenticateUser)
      if(authenticateUser.data.success = true){
        localStorage.setItem("moviesToken",authenticateUser.data.request_token)
        navigate("/movies")
      }
  }


  return (
    <div className="login-container">
      <h3>Please Login</h3>
      <form className="form-container">
        <img src={user} className="user-img"></img>
        <label className="form-email" >Email</label>
        <input className="form-input" autoFocus type="email" onChange={(e)=>handelEmail(e)}></input>
        <label className="form-password" >Password</label>
        <input className="form-input" type="password" onChange={(e)=>handelPassword(e)}></input>
        <button type="button" className="form-button" onClick={()=>submitLogin()}>Login</button>
      </form>
    </div>
  );
}
