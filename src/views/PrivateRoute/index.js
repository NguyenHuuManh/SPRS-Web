import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = (props) => {
  const auth = useSelector((state) => state.authReducer.auth);
  const user = JSON.parse(window.localStorage.getItem("userSPRS"));

  console.log(auth, user);
  // Render
  if (auth.isLogin || user?.userName) {
    return <Route {...props} />;
  }

  return <Redirect to="/login" />;
};

export default PrivateRoute;
