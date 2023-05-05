import React, { useEffect, useLayoutEffect } from "react";
import { Navigate, Outlet, Route, useNavigate } from "react-router-dom";



function PrivateRoute() {

   const navigate=useNavigate();
   const token = localStorage.getItem("moviesToken")
   

  useEffect(() => {
    if(token===null)
      navigate("/")
  }, [])
   return <Outlet/>       
}
export default PrivateRoute;